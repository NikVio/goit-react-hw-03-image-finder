export const ImageGalleryItem = ({ image, tags }) => {
  // const { image, tags } = this.props;
  return (
    <>
      <li>
        <img src={image} alt={tags} width="350" />
      </li>
    </>
  );
};
