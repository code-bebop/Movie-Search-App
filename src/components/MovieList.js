import React from "react";
import styled from "styled-components";

import MovieListItem from "./MovieListItem";

const MovieListBlock = styled.ul``;

const MovieList = ({ items }) => {
  console.log("무비리스트 렌더링");
  return (
    <MovieListBlock>
      {items.map(
        ({ title, image, userRating, pubDate, director, actor }, i) => (
          <MovieListItem
            key={i}
            image={image}
            title={title}
            userRating={userRating}
            pubDate={pubDate}
            director={director}
            actor={actor}
          />
        )
      )}
    </MovieListBlock>
  );
};

export default React.memo(MovieList);
