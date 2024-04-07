import { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { GameInfo } from "./components/GameInfo";
import { GameCard } from "./components/GameCard";
import { Score } from "./components/Score";
import { fetchDogData } from "./helpers/dogHelpers.js";
import { shuffleCards } from "./helpers/gameHelpers.js";

function App() {
  const [dogData, setDogData] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const numOfDogs = 6;

  // Sync App component with fetching data side effect
  useEffect(() => {
    fetchDogData(numOfDogs, setDogData);
  }, []);

  // Function that is passed when a card is clicked
  function handleClick() {
    shuffleCards(dogData, setDogData, numOfDogs);
    console.log(dogData);
    // Game logic:
    // On game render, initialize states and data
    // -> user clicks on card
    // +1 to score if prev cards clicked !== current card clicked then shuffle around the cards
    // else game ends and update best score
  }
  return (
    <>
      <Header />
      <GameInfo />
      <Score current={currentScore} best={bestScore} />
      <div className="container">
        {dogData.map((dog) => (
          //Key is the string and number at the end of the url (it is unique for each image)
          <GameCard key={dog.id} dogImage={dog.img} cardClick={handleClick} />
        ))}
      </div>
    </>
  );
}

export default App;
