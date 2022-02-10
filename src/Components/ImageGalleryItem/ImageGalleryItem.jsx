import s from "./ImageGalleryItem.module.css";
import PropTypes from "prop-types";

const ImageGalleryItem = ({ el, onModalOpen }) => {
  const { webformatURL, largeImageURL, tags } = el;

  return (
    <li
      className={s.galleryItem}
      onClick={() => {
        onModalOpen(largeImageURL);
      }}
    >
      <img className={s.galleryImage} src={webformatURL} alt={tags} />
    </li>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  onModalOpen: PropTypes.func.isRequired,
  el: PropTypes.object.isRequired,
};
