import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

axios.defaults.baseURL = "https://pixabay.com/api";
axios.defaults.params = {
  key: "4423902-dbd0f970c0cc60dbb84d66d4b",
  image_type: "photo",
  orientation: "horizontal",
  per_page: 12,
};

async function getImagesByQuery(searchQuery, page) {
  const { data } = await axios
    .get("", {
      params: { q: searchQuery, page },
    })
    .catch(function (error) {
      toast.error(error);
    });
  console.log(data.hits);
  return data.hits;
}

export { getImagesByQuery };
