import PropTypes from "prop-types";

import styles from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ imageSrc, openModalImage }) => {
  return (
    <li className={styles.ImageGalleryItem}>
      <img
        src={imageSrc}
        alt=""
        className={styles["ImageGalleryItem-image"]}
        onClick={openModalImage}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  openModalImage: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
