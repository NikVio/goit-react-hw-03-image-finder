import { Component } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { fetchImages } from './axios';
import { ImageGallery } from './ImageGallery/ImageGallery';

import { Searchbar } from './Searchbar/Searchbar';
import { FidgetSpinner } from 'react-loader-spinner';
import { Button } from './LoadMore/Button';

export class App extends Component {
  state = {
    page: 1,
    val: '',
    images: [],
    total: 0,
    isLoading: false,
    error: null,
  };

  handleSubmit = evt => {
    this.setState({ val: evt, images: [], page: 1 });
  };

  handleLoadMore = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
  };

  async componentDidUpdate(prevProps, prevState) {
    const { val, page } = this.state;
    if (prevState.val !== val || prevState.page !== page) {
      this.getImages(val, page);
    }
  }

  getImages = async (query, page) => {
    try {
      this.setState({ isLoading: true });
      const { hits, totalHits } = await fetchImages(query, page);

      this.setState(prevState => {
        return {
          images: [...prevState.images, ...hits],
          total: totalHits,
        };
      });
    } catch (error) {
      toast.error('Oops, something went wrong, please try again later...');
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    const { images, val, isLoading, total } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.handleSubmit} />
        {images.length === 0 && val !== '' && (
          <p>Sorry. Bad request {val}! Try again...</p>
        )}
        {isLoading && (
          <FidgetSpinner
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
            ballColors={['#ff0000', '#00ff00', '#0000ff']}
            backgroundColor="#F4442E"
          />
        )}

        {val && <ImageGallery images={images} />}
        {total > images.length && (
          <Button onClick={this.handleLoadMore} btnText="Load More" />
        )}
        <Toaster />
      </div>
    );
  }
}
