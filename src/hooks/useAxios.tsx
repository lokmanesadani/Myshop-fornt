import axios from "axios";

const useAxios = () => {
  console.log(import.meta.env.VITE_API_URL);

  return axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
      "Content-type": "application/json",
    },
  });
};

export default useAxios;
