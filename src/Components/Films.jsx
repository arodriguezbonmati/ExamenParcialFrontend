import React from "react";

import "./Styles.css";
import yellowStar from "../Pictures/yellowStar.svg"
import whiteStar from "../Pictures/whiteStar.svg"

const Films = props => {
  const { title, image, episode_id } = props.filmInfo;

  const yellowRatingsArray = [];
  for(let i = 0; i < props.rate; i++){
    yellowRatingsArray.push(<img className="yellowStar" src={yellowStar} alt="" />);
  }

  const whiteRatingsArray = [];
  for(let i = 0; i < 5- props.rate; i++){
    whiteRatingsArray.push(<img className="whiteStar" src={whiteStar} alt="" />);
  }

  return (
    <div className="full_film">
      <div className="basic_info">
        <div className="poster" onClick={() => props.func(title)}>
          <img className="film_image" src={image} />
        </div>
        <div className="title">
          <p className="p_title">{title}</p>
        </div>
        <div className="episode">
            <span>Episode:</span>
          <p className="p_episode">{episode_id}</p>
        </div>
        <div className="film_rating">
          {
            yellowRatingsArray
          }
          {
            whiteRatingsArray
          }
        </div>
      </div>
    </div>
  );
};

export default Films;
