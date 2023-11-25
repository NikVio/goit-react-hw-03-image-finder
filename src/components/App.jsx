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

  handleSubmit = evt => {
    // this.setState(prevState => {
    //   return { val: prevState.val.slice(15) };
    // });
    //const newEvt = Date.now().slice(5);

    this.setState({
      val: evt,
      images: [],
      page: 1,
    });
  };

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
    const { images, val, isLoading } = this.state;
    // const newVal = val.slice(14);
    // console.log(newVal);
    return (
      <Container>
        <Searchbar onSubmit={this.handleSubmit} />
        {/* {images.length === 0 && val !== '' && (
          <p>Sorry. Bad request {val}! Try again...</p>
        )} */}
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
        {images.length !== 0 && !isLoading && (
          <Button onClick={this.handleLoadMore} btnText="Load More" />
        )}
        <Toaster />
        <GlobalStyle />
      </Container>
    );
  }
}
