import { ImageModal } from 'components/Modal/Modal';
import { Component } from 'react';

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
        <li>
          <img src={image} alt={tags} width="350" onClick={this.openModal} />
        </li>

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
