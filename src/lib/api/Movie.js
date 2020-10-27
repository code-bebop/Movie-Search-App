import axios from "axios";

export const getMovieList = async (query, display) =>
  await axios.get(`/v1/search/movie.json?query=${query}&display=${display}`, {
    headers: {
      "X-Naver-Client-Id": "VWn8d_Kescc7tCMaYjkx",
      "X-Naver-Client-Secret": "YOvbZD8FiW",
    },
  });
