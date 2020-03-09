import React from "react";

import "./Styles.css";

const Characters = props => {
  const {
    image,
    title,
    episode_id,
    director,
    release_date,
    opening_crawl
  } = props.filmInfo;
  //let charImage = props.characters_film.image;
  //const { name, actor } = props.characters_film;

  return (
    <div className="completeEpisode">
      <div className="generalInfo">
        <div className="generalInfo_image">
          <img className="general_image" src={image} />
        </div>
        <div className="generalInfo_text">
          <div className="credits">
            <span>Title:</span>
            <p className="p_info">{title}</p>
          </div>
          <div className="credits">
            <span>Episode:</span>
            <p className="p_info">{episode_id}</p>
          </div>
          <div className="credits">
            <span>Director:</span>
            <p className="p_info">{director}</p>
          </div>
          <div className="credits">
            <span>Release:</span>
            <p className="p_info">{release_date}</p>
          </div>
          <div className="credits">
            <span>Beginning:</span>
            <p className="p_info_crawl">{opening_crawl}</p>
          </div>
        </div>
      </div>
      {/* <div className="characters">
        <div className="char_image">
          <img className="image" src={charImage} />
        </div>
        <div className="char_info">
          <span>NAME</span>
          <p className="p_info">{name}</p>
        </div>
        <div className="char_info">
          <span>ACTOR</span>
          <p className="p_info">{actor}</p>
        </div>
      </div> */}
    </div>
  );
};

export default Characters;
