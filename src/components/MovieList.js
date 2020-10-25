import React from "react";
import styled from "styled-components";

import MovieListItem from "./MovieListItem";

const MovieListBlock = styled.ul``;

const MovieList = ({ items }) => {
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

export default MovieList;
