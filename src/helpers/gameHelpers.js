function shuffleCards(dogData, setDogData, numberOfDogs) {
  const newDogArray = new Array(numberOfDogs).fill(null);
  // Creates a new array of dogData in randomized order
  for (let i = 0; i < newDogArray.length; i++) {
    const randomIndex = Math.floor(Math.random() * (numberOfDogs + 1));
    newDogArray[randomIndex] = dogData[i];
  }
  setDogData(newDogArray);
}

export { shuffleCards };
