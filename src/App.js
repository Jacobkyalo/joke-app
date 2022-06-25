import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import JokeCard from "./components/JokeCard";

function App() {
  return (
    <div className="app">
      <Header />
      <JokeCard />
    </div>
  );
}

export default App;
