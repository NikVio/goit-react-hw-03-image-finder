import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images, id }) => {
  return (
    <ul>
      <ImageGalleryItem images={images} id={id} />
    </ul>
  );
};
