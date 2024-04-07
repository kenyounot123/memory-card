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
        {dogData.map((image) => (
          //Key is the number at the end of the url (it is unique for each image)
          <GameCard key={image.match(/\d+/g)} dogImage={image} />
        ))}
      </div>
    </>
  );
}

export default App;
