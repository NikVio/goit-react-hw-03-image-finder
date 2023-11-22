import { Component } from 'react';
import { fetchImages } from './axios';
import { ImageGallery } from './ImageGallery/ImageGallery';

import { Searchbar } from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    page: 1,
    query: '',
  };

  async componentDidMount() {
    const { query, page } = this.state;
    try {
      const initialImages = await fetchImages(query, page);
      console.log(initialImages);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div>
        <Searchbar />
        <ImageGallery />
      </div>
    );
  }
}
