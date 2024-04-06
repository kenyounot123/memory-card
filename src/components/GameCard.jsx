import "../stylesheets/GameCard.css";

function GameCard({ dogImage }) {
  return (
    <div className="card">
      <img src={dogImage} alt="cute dog" />
    </div>
  );
}
export { GameCard };
