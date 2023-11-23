import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images }) => {
  return (
    <ul>
      {images.map(image => {
        const { id, webformatURL, tags } = image;
        return <ImageGalleryItem image={webformatURL} key={id} tags={tags} />;
      })}
    </ul>
  );
};
