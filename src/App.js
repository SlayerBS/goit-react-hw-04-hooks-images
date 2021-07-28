import React, { Component } from "react";
import SearchBar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
import Button from "./components/Button";
import { getImagesByQuery } from "./api/api";
import LoaderSpiner from "./components/Loader";
import Modal from "./components/Modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import styles from "./App.module.css";

export default class App extends Component {
  state = {
    images: [],
    searchQuery: "",
    page: 1,
    showModal: false,
    isLoading: false,
    largeImageURL: "",
    showButton: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;
    if (prevQuery !== nextQuery) {
      this.getImages();
    }

    if (this.state.images.length - prevState.images.length === 12) {
      this.setState({ showButton: true });
    }
  }

  onSubmit = (searchQuery) =>
    this.setState({
      images: [],
      searchQuery: searchQuery,
      page: 1,
      error: null,
      showButton: false,
    });

  getImages = () => {
    const { searchQuery, page } = this.state;
    this.setState({ isLoading: true });

    getImagesByQuery(searchQuery, page)
      .then((images) => {
        if (images.length === 0) {
          this.setState({ showButton: false });
          toast.error(
            `Search result by "${searchQuery}' not successful. Enter the correct query.`
          );
          return;
        } else if (images.length !== 12) {
          toast("Фото закончились");
          this.setState({ showButton: false });
        }
        this.setState((prevState) => ({
          images: [...prevState.images, ...images],
          page: prevState.page + 1,
        }));
      })
      .catch((error) => toast(error))
      .finally(() => {
        this.scrollDown();
        this.setState({ isLoading: false });
      });
  };

  scrollDown = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  toggleModal = () =>
    this.setState(({ showModal }) => ({ showModal: !showModal }));

  modalImage = (largeImageURL) => {
    this.setState({ largeImageURL });
    this.toggleModal();
  };

  render() {
    const { images, isLoading, showModal, largeImageURL, error, showButton } =
      this.state;
    return (
      <div className={styles.App}>
        <ToastContainer autoClose={3000} position="top-left" />
        <SearchBar onSubmit={this.onSubmit} />
        {error && <p className={styles.Error}>{error}</p>}
        {images && (
          <div>
            <ImageGallery images={images} modalImage={this.modalImage} />
          </div>
        )}
        {isLoading && <LoaderSpiner />}
        {showButton && !isLoading && <Button onClick={this.getImages} />}
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={largeImageURL} alt="" />
          </Modal>
        )}
      </div>
    );
  }
}
