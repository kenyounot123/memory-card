import { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { GameInfo } from "./components/GameInfo";
import { GameCard } from "./components/GameCard";
import { Score } from "./components/Score";
import { fetchDogData } from "./helpers/dogHelpers.js";
import { shuffleCards, getCurrentScore } from "./helpers/gameHelpers.js";
import { ResultPage } from "./components/ResultPage.jsx";

function App() {
  const [dogData, setDogData] = useState([]);
  const [bestScore, setBestScore] = useState(0);
  const [gameFinished, setGameFinished] = useState({
    gameOver: false,
    gameStatus: "",
  });
  const numOfDogs = 9;
  // Sync App component with fetching data side effect
  useEffect(() => {
    fetchDogData(numOfDogs, setDogData);
  }, [bestScore]);

  function handlePlayAgain(e) {
    e.preventDefault();
    setGameFinished({ ...gameFinished, gameOver: false, gameStatus: "" });
  }

  function handleClick(dog, index) {
    const unclickedDogs = dogData.filter((dog) => dog.clicked === false);
    if (dog.clicked) {
      setBestScore(getCurrentScore(dogData));
      setGameFinished({
        ...gameFinished,
        gameOver: true,
        gameStatus: "lose",
      });
    } else if (unclickedDogs.length === 1) {
      setBestScore(getCurrentScore(dogData) + 1);
      setGameFinished({
        ...gameFinished,
        gameOver: true,
        gameStatus: "win",
      });
    } else {
      const updatedDogData = [...dogData];
      updatedDogData[index].clicked = true;
      setDogData(updatedDogData);
      shuffleCards(updatedDogData, setDogData);
    }
  }
  return (
    <>
      <Header />
      <GameInfo />
      <Score current={getCurrentScore(dogData)} best={bestScore} />
      {gameFinished.gameOver ? (
        <ResultPage
          playAgain={(e) => handlePlayAgain(e)}
          status={gameFinished.gameStatus}
        />
      ) : (
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
      )}
    </>
  );
}

export default App;
