import PropTypes from "prop-types";
import ImageGalleryItem from "../ImageGalleryItem";

import styles from "./ImageGallery.module.css";

const ImageGallery = ({ images, modalImage }) => {
  return (
    <ul className={styles.ImageGallery}>
      {images.map(({ id, webformatURL, largeImageURL }) => {
        const openModalImage = () => modalImage(largeImageURL);
        return (
          <ImageGalleryItem
            key={id}
            imageSrc={webformatURL}
            openModalImage={openModalImage}
          />
        );
      })}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  modalImage: PropTypes.func.isRequired,
};

export default ImageGallery;
