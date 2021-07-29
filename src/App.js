import React, { useState, useEffect } from "react";
import SearchBar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
import Button from "./components/Button";
import { getImagesByQuery } from "./api/api";
import LoaderSpiner from "./components/Loader";
import Modal from "./components/Modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import styles from "./App.module.css";

export default function App() {
  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState("");
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    console.log("searchQuery", searchQuery);
    searchQuery && getImages();
    if (images.length % 12) {
      console.log(images.length % 12, images);
      setShowButton(true);
    }
  }, [searchQuery]);

  const onSubmit = (searchQuery) => {
    setImages([]);
    setSearchQuery(searchQuery);
    setPage(1);
    // setError(null),
    setShowButton(false);
  };

  const getImages = () => {
    setIsLoading(true);
    // const prevImages = images;
    getImagesByQuery(searchQuery, page)
      .then((images) => {
        if (images.length === 0) {
          setShowButton(false);
          toast.error(
            `Search result by "${searchQuery}' not successful. Enter the correct query.`
          );
          return;
        } else if (images.length !== 12) {
          toast("Фото закончились");
          setShowButton(false);
        }
        setImages((prevState) => [...prevState, ...images]);
        setPage((page) => page + 1);
        setShowButton(true);
      })
      .catch((error) => toast(error))
      .finally(() => {
        scrollDown();
        setIsLoading(false);
      });
  };

  const scrollDown = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  const toggleModal = () => setShowModal(!showModal);

  const modalImage = (largeImageURL) => {
    setLargeImageURL(largeImageURL);
    toggleModal();
  };

  return (
    <div className={styles.App}>
      <ToastContainer autoClose={3000} position="top-left" />
      <SearchBar onSubmit={onSubmit} />

      {images && (
        <div>
          <ImageGallery images={images} modalImage={modalImage} />
        </div>
      )}
      {isLoading && <LoaderSpiner />}
      {showButton && !isLoading && <Button onClick={getImages} />}
      {showModal && <Modal onClose={toggleModal} img={largeImageURL} />}
    </div>
  );
}
