import React from "react";
import laugh from "../laughing.jfif";

const JokeCard = () => {
  return (
    <div className="container">
      <div className="joke-card">
        <img src={laugh} alt="laugh-emoji" className="img" />
        <p className="joke-text">A random joke</p>
      </div>
    </div>
  );
};

export default JokeCard;
