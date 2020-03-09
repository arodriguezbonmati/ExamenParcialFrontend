import React from "react";

import "./Styles.css";

const Films = props => {
  const { title, image, episode_id } = props.filmInfo;

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
      </div>
    </div>
  );
};

export default Films;
