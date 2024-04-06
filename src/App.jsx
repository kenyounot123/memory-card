import { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { GameInfo } from "./components/GameInfo";
import { GameCard } from "./components/GameCard";
import { Score } from "./components/Score";
import { fetchDogData } from "./helpers/dogHelpers.js";

function App() {
  const [dogData, setDogData] = useState([]);
  useEffect(() => {
    fetchDogData(setDogData);
  }, []);
  return (
    <>
      <Header />
      <GameInfo />
      <Score current="0" best="45" />
      <div className="container">
        <GameCard dogData={dogData[0]} />
        <GameCard />
        <GameCard />
        <GameCard />
        <GameCard />
        <GameCard />
      </div>
    </>
  );
}

export default App;
