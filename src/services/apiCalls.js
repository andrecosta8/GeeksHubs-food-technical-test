import axios from "axios";

const API_ROOT = "https://www.themealdb.com/api/json/v1/1";
const ENDPOINT = "/search.php?s=";

export const getDataFromAPI = (search) => {
  return axios
    .get(`${API_ROOT}${ENDPOINT}${search}`)
    .then((response) => {
      return response.data;
    })
    .catch((e) => console.error(e));
};
