import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components";

import MovieList from "./components/MovieList";
import { getMovieList } from "./lib/api/Movie";

const Wrapper = styled.div`
  width: 1024px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    width: 768px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
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
  const [display, setDisplay] = useState(10);

  const getData = useCallback(
    async (e) => {
      if (e) {
        e.preventDefault();
      }
      if (query === "") {
        alert("검색어를 입력해주십시오.");
        return;
      }

      try {
        setLoading(true);
        const {
          data: { items: data },
        } = await getMovieList(query, display);
        setItems(data);
        setDisplay(display + 10);
        console.log(display);
        setLoading(false);
      } catch (e) {
        console.log(e);
        setLoading(false);
      }
    },
    [query, display]
  );

  const onInputChange = (e) => {
    setQuery(e.target.value);
  };

  const getDocumentHeight = () => {
    const body = document.body;
    const html = document.documentElement;

    return Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
  };

  const getScrollTop = () => {
    return window.pageYOffset !== undefined
      ? window.pageYOffset
      : (document.documentElement || document.body.parentNode || document.body)
          .scrollTop;
  };

  useEffect(() => {
    const scrollHandler = () => {
      if (items) {
        if (getScrollTop() >= getDocumentHeight() - window.innerHeight) {
          // console.log(`스크롤 트리거 ON, items.length: ${items.length}`);
          // const nextDisplay = items.length + 10;
          // console.log(`nextDisplay: ${nextDisplay}`);
          // setDisplay(nextDisplay);
          // console.log(`setDisplay 작동, display: ${display}`);
          getData();
        }
      }
    };

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [items, getData, display]);

  return (
    <Wrapper>
      <SearchMovieForm onSubmit={getData}>
        <input onChange={onInputChange} value={query} />
        <button type="submit">검색</button>
      </SearchMovieForm>
      {items ? (
        <MovieList items={items} />
      ) : (
        <MovieMessage>검색을 해 주십시오</MovieMessage>
      )}
    </Wrapper>
  );
};

export default App;
