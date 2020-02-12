const getRandomNumber = (lowerNumer, higherNumber) => Math.round(Math.random()
  * (higherNumber - lowerNumer)) + lowerNumer;

export default getRandomNumber;
