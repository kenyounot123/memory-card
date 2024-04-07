import "../stylesheets/GameCard.css";

function GameCard({ dogImage, cardClick }) {
  return (
    <div className="card" onClick={cardClick}>
      <img className="dog-img" src={dogImage} alt="cute dog" />
    </div>
  );
}
export { GameCard };
