import React from "react";
import styled from "styled-components";

import MovieListItem from "./MovieListItem";

const MovieListBlock = styled.ul`
  padding: 57px 0;
`;
const ErrorMessage = styled.p`
  color: #fff;
  font-size: 3rem;
`;

const MovieList = ({ items }) => {
  console.log(items);
  if (items.length === 0) {
    return <ErrorMessage>검색 결과가 없습니다.</ErrorMessage>;
  }
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
