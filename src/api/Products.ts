import axios from "axios";

export const getProducts = () => {
  return axios
    .get(import.meta.env.VITE_API_URL + "/products")
    .then((res) => res.data);
};
