async function fetchDogData(setDogData) {
  const response = await fetch(
    "https://dog.ceo/api/breed/shiba/images/random/6"
  );
  const data = await response.json();
  const randomDogs = [];
  for (let i = 0; i < data.message.length; i++) {
    randomDogs.push(data.message[i]);
  }
  setDogData(randomDogs);
}
export { fetchDogData };
