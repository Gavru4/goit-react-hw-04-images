import { Component } from "react";
import { ToastContainer } from "react-toastify";
import "./App.css";
import LoadMoreBtn from "./Components/Button/Button";
import ImageGallery from "./Components/ImageGallery/ImageGallery";
import Loader from "./Components/Loader/Loader.jsx";
import Modal from "./Components/Modal/Modal";
import Searchbar from "./Components/Searchbar/Searchbar";
import FechApi from "./Components/Services/FechAPI.jsx";

class App extends Component {
  state = {
    loadMore: true,
    // search: "",
    page: 1,
    request: "",
    images: [],
    isLoading: false,
    modalOpen: false,
    imageURL: {},
    // error: null,
  };
  async onRequestSubmit() {
    const apiAnswer = await FechApi(this.state);
    this.setState((prev) => ({
      images:
        this.state.page === 1 ? apiAnswer : [...prev.images, ...apiAnswer],
      loadMore: apiAnswer.length < 12 ? false : true,
    }));
    // if (apiAnswer.length < 12) {
    //   return this.setState({ loadMore: false });
    // }
    this.setState({ isLoading: false });
  }
  async componentDidMount() {
    this.onRequestSubmit();
    // const apiAnswer = await FechApi(this.state);
    // this.setState({ images: apiAnswer });
  }

  async componentDidUpdate(_, prevState) {
    if (
      prevState.request !== this.state.request ||
      prevState.page !== this.state.page
    ) {
      // const apiAnswer = await FechApi(this.state);
      // this.setState({ images: apiAnswer });
      this.onRequestSubmit();
    }

    // if (prevState.page !== this.state.page) {
    //    this.onRequestSubmit();
    // const apiAnswer = await FechApi(this.state);
    // this.setState((prev) => ({
    //   images: [...prev.images, ...apiAnswer],
    //   isLoading: false,
    // }));

    // if (apiAnswer.length < 12) {
    //   return this.setState({ loadMore: false });
    // }
    // this.setState({ loadMore: true });
  }

  handleFormSubmit = (requestValue) => {
    this.setState({ request: requestValue, page: 1 });
  };
  onLoadMore = (e) => {
    this.setState((prev) => ({ page: prev.page + 1, isLoading: true }));
  };

  onModalOpen = (imageURL) => {
    this.setState({ modalOpen: true, imageURL: imageURL });
  };

  onModalClose = (e) => {
    if (e === "overlay" || e.key === "Escape")
      this.setState({ modalOpen: false });
  };
  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery
          images={this.state.images}
          onModalOpen={this.onModalOpen}
        />
        {this.state.isLoading && <Loader />}
        {this.state.loadMore && <LoadMoreBtn onLoadMore={this.onLoadMore} />}
        {this.state.modalOpen && (
          <Modal
            imageURL={this.state.imageURL}
            onModalClose={this.onModalClose}
          />
        )}
        <ToastContainer autoClose={3000} />
      </>
    );
  }
}

export default App;
