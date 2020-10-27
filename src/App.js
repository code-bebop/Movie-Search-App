import React, { useState, useCallback } from "react";
import styled from "styled-components";

import MovieList from "./components/MovieList";
import { getMovieList } from "./lib/api/Movie";

const Wrapper = styled.div`
  padding: 0 361px;
`;

const SearchMovieForm = styled.form`
  margin-top: 60px;
  text-align: center;
  & > input {
    color: white;
    background-color: transparent;
    border: none;
    border-bottom: 5px solid #fff;
    outline: none;
    min-width: 338px;
  }
  & > button {
    display: none;
  }
`;

const MovieMessage = styled.p`
  color: #fff;
  font-size: 3rem;
`;

const App = () => {
  const [items, setItems] = useState(null);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const getData = useCallback(
    async (e) => {
      e.preventDefault();

      if (query === "") {
        alert("검색어를 입력해주십시오.");
        return;
      }

      try {
        setLoading(true);
        const {
          data: { items: data },
        } = await getMovieList(query);
        setItems(data);
        setLoading(false);
      } catch (e) {
        console.log(e);
        setLoading(false);
      }
    },
    [query]
  );

  const onInputChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <Wrapper>
      <SearchMovieForm onSubmit={getData}>
        <input onChange={onInputChange} value={query} />
        <button type="submit">검색</button>
      </SearchMovieForm>
      {!loading && items ? (
        <MovieList items={items} />
      ) : !items ? (
        <MovieMessage>검색을 해 주십시오</MovieMessage>
      ) : (
        <MovieMessage>로딩 중 . . .</MovieMessage>
      )}
    </Wrapper>
  );
};

export default App;
