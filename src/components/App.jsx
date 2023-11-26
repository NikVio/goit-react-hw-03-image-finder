import { Component } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { fetchImages } from './axios';
import { ImageGallery } from './ImageGallery/ImageGallery';

import { Searchbar } from './Searchbar/Searchbar';
import { FidgetSpinner } from 'react-loader-spinner';
import { Button } from './LoadMore/Button';
import { GlobalStyle } from './GlobalStyle';
import { Container } from './App.styled';

export class App extends Component {
  state = {
    page: 1,
    val: '',
    images: [],
    total: 0,

    isLoading: false,
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

  handleSubmit = evt => {
    if (evt === '') {
      toast.error('The field must not be empty!🤦‍♂️');
      return;
    }

    this.setState({
      val: evt,
      images: [],
      page: 1,
    });
    toast.dismiss();
  };

  render() {
    const { images, isLoading } = this.state;

    return (
      <Container>
        <Searchbar onSubmit={this.handleSubmit} />

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
        {images.length > 0 && <ImageGallery images={images} />}
        {images.length > 0 && (
          <Button onClick={this.handleLoadMore} btnText="Load More" />
        )}

        <Toaster />
        <GlobalStyle />
      </Container>
    );
  }
}
