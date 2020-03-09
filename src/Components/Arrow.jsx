import React from "react";

import "./Styles.css";

const Arrow = props => {

  return (
      <div className="arrow" onClick={() => props.r()}>
        <img className="arrow_image" src={"https://image.flaticon.com/icons/svg/458/458594.svg"}/>
      </div>
  );
};

export default Arrow;