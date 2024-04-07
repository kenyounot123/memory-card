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

  const numOfDogs = 9;

  // Sync App component with fetching data side effect
  useEffect(() => {
    fetchDogData(numOfDogs, setDogData);
  }, []);

  // Function that is passed when a card is clicked
  function handleClick(dog, index) {
    console.log(dog);
    if (dog.clicked) {
      setBestScore(currentScore);
      setCurrentScore(0);
      //Render lose page
    }
    setCurrentScore((prevScore) => prevScore + 1);
    const updatedDogData = [...dogData];
    updatedDogData[index].clicked = true;
    setDogData(updatedDogData);
    shuffleCards(updatedDogData, setDogData);
  }
  return (
    <>
      <Header />
      <GameInfo />
      <Score current={currentScore} best={bestScore} />
      <div className="card-container">
        {dogData.map((dog, index) => (
          //Key is the string and number at the end of the url (it is unique for each image)
          <GameCard
            key={dog.id}
            dogImage={dog.img}
            cardClick={() => handleClick(dog, index)}
          />
        ))}
      </div>
    </>
  );
}

export default App;
