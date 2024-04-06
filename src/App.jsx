import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { GameInfo } from "./components/GameInfo";
import { GameCard } from "./components/GameCard";
import { Score } from "./components/Score";

export function App() {
  return (
    <>
      <Header />
      <GameInfo />
      <Score current="0" best="45" />
      <div className="card-container">
        <GameCard />
      </div>
    </>
  );
}

export default App;
