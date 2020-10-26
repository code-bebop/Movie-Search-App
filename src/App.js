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
  color: #fc3ce9;
`;

const App = () => {
  const [items, setItems] = useState(null);
  const [query, setQuery] = useState("");

  const getData = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        const {
          data: { items: data },
        } = await getMovieList(query);
        setItems(data);
      } catch (e) {
        console.log(e);
      }
    },
    [query]
  );

  const onInputChange = (e) => {
    setQuery(e.target.value);
  };

  console.log(query);

  return (
    <Wrapper>
      <SearchMovieForm onSubmit={getData}>
        <input onChange={onInputChange} value={query} />
        <button type="submit">검색</button>
      </SearchMovieForm>
      {items ? <MovieList items={items} /> : <p>loading...</p>}
    </Wrapper>
  );
};

export default App;
