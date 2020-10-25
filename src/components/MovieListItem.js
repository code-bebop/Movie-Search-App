import React from "react";
import styled from "styled-components";

const MovieListItemBlock = styled.li`
  color: #fff;
`;

const MovieListItem = ({
  image,
  title,
  userRating,
  pubDate,
  director,
  actor,
}) => {
  return (
    <MovieListItemBlock>
      <img src={image} alt="날씨의 아이" />
      <h3>{title}</h3>
      <dl>
        <dt>평점</dt>
        <dd>{userRating}</dd>
        <dt>개봉일</dt>
        <dd>{pubDate}</dd>
        <dt>감독</dt>
        <dd>{director}</dd>
        <dt>배우</dt>
        <dd>{actor}</dd>
      </dl>
    </MovieListItemBlock>
  );
};

export default MovieListItem;
