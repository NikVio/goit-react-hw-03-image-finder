export const ImageGalleryItem = ({ images, id }) => {
  return (
    <ul>
      {images.map(image => {
        return (
          <li class="gallery-item" key={id}>
            <img src={image} alt="img from backend" />
          </li>
        );
      })}
    </ul>
  );
};
