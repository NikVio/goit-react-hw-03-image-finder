import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images }) => {
  return (
    <ul>
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
    </ul>
  );
};
