import React, { useState, useEffect } from "react";
import styled from "styled-components";

import MovieList from "./components/MovieList";
import { getMovieList } from "./lib/api/Movie";

const Wrapper = styled.div`
  padding: 0 361px;
`;

const Title = styled.input`
  margin-top: 60px;
  text-align: center;
  color: #fc3ce9;
`;

const App = () => {
  const [items, setItems] = useState(null);
  const [query, setQuery] = useState("날씨의 아이");

  useEffect(() => {
    const getData = async () => {
      try {
        const {
          data: { items: data },
        } = await getMovieList(query);
        setItems(data);
      } catch (e) {
        console.log(e);
      }
    };

    getData();
  }, [query]);

  console.log(items);
  return (
    <Wrapper>
      <Title />
      {items ? <MovieList items={items} /> : <p>loading...</p>}
    </Wrapper>
  );
};

export default App;
