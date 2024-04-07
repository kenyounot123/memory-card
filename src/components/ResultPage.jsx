import "../stylesheets/ResultPage.css";
function ResultPage({ status, playAgain }) {
  return (
    <div className="result-container">
      {status === "win" ? (
        <p>
          YOU GOT THAT <br></br>
          <span className="emphasize">DOG</span> IN YOU
        </p>
      ) : (
        <p>
          I'm afraid you do not <br></br>got that{" "}
          <span className="emphasize">DOG</span> in you
        </p>
      )}
      <button onClick={playAgain} className="play-again-btn">
        Play again
      </button>
    </div>
  );
}
export { ResultPage };
