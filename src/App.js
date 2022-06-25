import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import JokeCard from "./components/JokeCard";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    fetchJokes();
  }, []);

  const fetchJokes = async () => {
    const response = await fetch("https://icanhazdadjoke.com/slack");
    const jsonData = await response.json();
    setJokes(jsonData.attachments[0].text);
  };
  return (
    <div className="app">
      <Header />
      <JokeCard />
      <button
        type="button"
        className="joke-btn"
        onClick={() => console.log("Generated!")}
      >
        Generate Joke
      </button>
    </div>
  );
}

export default App;
