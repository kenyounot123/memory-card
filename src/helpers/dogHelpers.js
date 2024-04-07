function getDogId(dogUrl) {
  const match = dogUrl.match(/\/shiba\/(\w*\W*\d*\w*)\.jpg$/);
  // console.log(match);
  return match[1];
}
function createDog(id, img) {
  return {
    id: id,
    img: img,
    clicked: false,
  };
}
async function fetchDogData(numberOfDogs, setDogData) {
  const response = await fetch(
    `https://dog.ceo/api/breed/shiba/images/random/${numberOfDogs}`
  );
  const data = await response.json();
  // console.log(data);
  const randomDogs = [];
  for (let i = 0; i < data.message.length; i++) {
    const id = getDogId(data.message[i]);
    const dog = createDog(id, data.message[i]);
    randomDogs.push(dog);
  }
  setDogData(randomDogs);
}

export { fetchDogData };
