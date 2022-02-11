import { Component, useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "./App.css";
import LoadMoreBtn from "./Components/Button/Button";
import ImageGallery from "./Components/ImageGallery/ImageGallery";
import Loader from "./Components/Loader/Loader.jsx";
import Modal from "./Components/Modal/Modal";
import Searchbar from "./Components/Searchbar/Searchbar";
import FechApi from "./Components/Services/FechAPI.jsx";

const App = () => {
  const [page, setPage] = useState(1);
  const [request, setRequest] = useState("");
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [imageURL, setImageURL] = useState({});

  useEffect(() => {
    const onRequestSubmit = async () => {
      setIsLoading(true);
      try {
        const apiAnswer = await FechApi({ page, request });
        setImages((prev) => (page === 1 ? apiAnswer : [...prev, ...apiAnswer]));
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    onRequestSubmit();
  }, [page, request]);

  const handleFormSubmit = (requestValue) => {
    setRequest(requestValue);
    setPage(1);
  };
  const onLoadMore = (e) => {
    setPage((prev) => prev + 1);
  };

  const onModalOpen = (imageURL) => {
    setModalOpen(true);
    setImageURL(imageURL);
  };

  const onModalClose = (e) => {
    if (e === "overlay" || e.key === "Escape") setModalOpen(false);
  };

  return (
    <>
      <Searchbar onSubmit={handleFormSubmit} />
      <ImageGallery images={images} onModalOpen={onModalOpen} />
      {isLoading && <Loader />}
      {images.length % 12 === 0 && <LoadMoreBtn onLoadMore={onLoadMore} />}
      {modalOpen && <Modal imageURL={imageURL} onModalClose={onModalClose} />}
      <ToastContainer autoClose={3000} />
    </>
  );
};

export default App;
