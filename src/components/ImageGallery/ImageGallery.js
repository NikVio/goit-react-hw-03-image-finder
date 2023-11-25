import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryList } from './ImageGallery.styled';

export const ImageGallery = ({ images }) => {
  return (
    <ImageGalleryList>
      {images.map(image => {
        const { id, webformatURL, largeImageURL, tags } = image;
        return (
          <ImageGalleryItem
            image={webformatURL}
            modalImage={largeImageURL}
            key={id}
            tags={tags}
          />
        );
      })}
    </ImageGalleryList>
  );
};
