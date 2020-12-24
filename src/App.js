import React from "react";
import Confetti from "react-confetti";
import Snowfall from "react-snowfall";
import StarrySky from "./components/starry-sky";
import Holiday from "./components/holiday";
import "./App.css";

function App() {
  return (
    <>
      <Snowfall />
      <StarrySky />
      <Confetti />
      <Holiday />
    </>
  );
}

export default App;