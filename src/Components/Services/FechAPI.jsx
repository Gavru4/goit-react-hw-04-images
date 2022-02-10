import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PropTypes from "prop-types";
// https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12

axios.defaults.baseURL = "https://pixabay.com/api/";
const KEY = "25285051-4b045d69a43564daa3e04547c";

const FechApi = async ({ request, page }) => {
  try {
    const result = await axios.get(
      `?q=${request}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
    );
    if (result.data.hits.length === 0) {
      toast("На ваш запрос не нейдено фото!");
    }
    return result.data.hits;
  } catch (error) {
    throw new Error(toast(`Запрос с именем ${request} не найден`));
  }
};
export default FechApi;

FechApi.propTypes = {
  request: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
};
