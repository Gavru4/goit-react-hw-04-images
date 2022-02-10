import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import s from "./ImageGallery.module.css";
import PropTypes from "prop-types";

const ImageGallery = ({ images, onModalOpen }) => {
  return (
    <ul className={s.gallery}>
      {images.map((el) => {
        return (
          <ImageGalleryItem
            el={el}
            key={el.webformatURL}
            onModalOpen={onModalOpen}
          />
        );
      })}
    </ul>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  onModalOpen: PropTypes.func.isRequired,
  images: PropTypes.array.isRequired,
};
