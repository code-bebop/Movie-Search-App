import axios from "axios";

export const getMovieList = async (query) =>
  await axios.get(`/v1/search/movie.json?query=${query}`, {
    headers: {
      "X-Naver-Client-Id": "VWn8d_Kescc7tCMaYjkx",
      "X-Naver-Client-Secret": "YOvbZD8FiW",
    },
  });