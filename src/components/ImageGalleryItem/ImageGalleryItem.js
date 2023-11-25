import { ImageModal } from 'components/Modal/Modal';
import { Component } from 'react';
import { Image, ImageItem } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
    isLoading: false,
  };

  openModal = () => {
    this.setState({
      isModalOpen: true,
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  render() {
    const { isModalOpen } = this.state;
    const { image, tags, modalImage } = this.props;

    return (
      <>
        <ImageItem>
          <Image src={image} alt={tags} onClick={this.openModal} />
        </ImageItem>

        <ImageModal
          isOpen={isModalOpen}
          isClose={this.closeModal}
          tags={tags}
          modalImage={modalImage}
        />
      </>
    );
  }
}
