const data = require('../data/zoo_data');

const { species } = data;

// console.log(species);

const getAnimalsOlderThan = (animal, age) => {
  const animalSearch = species.find((element) => element.name === animal);
  return animalSearch.residents.every(({ age: age2 }) => age2 >= age);
};

console.log(getAnimalsOlderThan('penguins', 10));

module.exports = getAnimalsOlderThan;
