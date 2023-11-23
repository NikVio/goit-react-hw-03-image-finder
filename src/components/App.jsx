import { Component } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { fetchImages } from './axios';
import { ImageGallery } from './ImageGallery/ImageGallery';

import { Searchbar } from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    page: 1,
    val: '',
    images: [],
    total: null,
  };

  handleSubmit = evt => {
    this.setState({ val: evt, images: [], page: 1 });
  };

  async componentDidUpdate(prevProps, prevState) {
    const { val, page } = this.state;
    if (prevState.val !== val || prevState.page !== page) {
      this.getImages(val, page);
    }
    // const { query, page } = this.state;
    // try {
    //   const initialImages = await fetchImages(query, page);
    //   console.log(initialImages);
    // } catch (error) {
    //   console.log(error);
    // }
  }

  getImages = async (query, page) => {
    try {
      const { hits, totalHits } = await fetchImages(query, page);

      this.setState(prevState => {
        return {
          images: [...prevState.images, ...hits],
          total: totalHits,
        };
      });

      //console.log(data);
    } catch (error) {
      toast.error('This is an error!');
    }
  };

  render() {
    const { images } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery images={images} />
        <Toaster />
      </div>
    );
  }
}
