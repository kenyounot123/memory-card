import "../stylesheets/Score.css";
function Score({ current, best }) {
  return (
    <div className="score-container container">
      <p>Current score: {current}</p>
      <p>Best score: {best}</p>
    </div>
  );
}
export { Score };
