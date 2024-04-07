function shuffleCards(dogData, setDogData) {
  const shuffledArray = [...dogData];

  // Shuffle the copied array using Fisher-Yates algorithm
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1)); // Generate random index
    // Swap elements at current index and random index
    [shuffledArray[i], shuffledArray[randomIndex]] = [
      shuffledArray[randomIndex],
      shuffledArray[i],
    ];
  }

  setDogData(shuffledArray);
}
export { shuffleCards };
