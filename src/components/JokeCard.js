import React, { useState, useEffect } from "react";
import laugh from "../laughing.jfif";

const JokeCard = () => {
  const [joke, setJoke] = useState([]);

  useEffect(() => {
    fetchJokes();
  }, []);

  const fetchJokes = async () => {
    const headers = {
      headers: {
        Accept: "application/json",
      },
    };
    const response = await fetch("https://icanhazdadjoke.com", headers);
    const jsonData = await response.json();
    setJoke(jsonData.joke);
  };
  return (
    <div className="container">
      <div className="joke-card">
        <img src={laugh} alt="laugh-emoji" className="img" />
        <p className="joke-text">{joke}</p>
        <button type="button" className="joke-btn" onClick={fetchJokes}>
          Generate Joke
        </button>
      </div>
    </div>
  );
};

export default JokeCard;
