import React from "react";
import styled from "styled-components";

const MovieListItemBlock = styled.li`
  color: #fff;
  background-color: rgba(0, 0, 0, 0.4);
  width: 1196px;
  height: 450px;
  margin-top: 41px;
  padding: 45px 45px;
  & .Wrapper {
    position: relative;
    display: flex;
    & > img {
      max-width: 320px;
      height: 360px;
      margin-right: 45px;
      flex: 2;
    }
    & > div {
      flex: 1;
      & > h3 {
        font-size: 42px;
        margin-bottom: 30px;
      }
      & > dl {
        & > dt,
        & > dd {
          font-size: 18px;
        }
        & > dt {
          display: block;
          float: left;
          width: auto;
          margin: 0 40px 25px 0;
          font-weight: bold;
        }
        & > dd {
          padding-left: 100px;
          &:after {
            content: "";
            display: block;
            clear: both;
          }
        }
      }
    }
  }
  & + & {
    margin-top: 57px;
  }
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
      <div className="Wrapper">
        <img
          src={image}
          alt={title.replace(/<b>/gi, "").replace(/<\/b>/gi, "")}
        />
        <div>
          <h3>{title.replace(/<b>/gi, "").replace(/<\/b>/gi, "")}</h3>
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
        </div>
      </div>
    </MovieListItemBlock>
  );
};

export default MovieListItem;
