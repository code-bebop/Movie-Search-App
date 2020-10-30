import axios from "axios";
import dotenv from 'dotenv';

dotenv.config();

export const getMovieList = async (query: string, display: number) =>
  await axios.get(`/v1/search/movie.json?query=${query}&display=${display}`, {
    headers: {
      "X-Naver-Client-Id": "VWn8d_Kescc7tCMaYjkx",
      "X-Naver-Client-Secret": process.env.X_Naver_Client_Secret,
    },
  });
