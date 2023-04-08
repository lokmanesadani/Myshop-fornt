import axios from "axios";

const useAxios = () => {
  return axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
    headers: {
      "Content-type": "application/json",
    },
  });
};

export default useAxios;
