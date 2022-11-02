const data = require('../data/zoo_data');

const { employees, species } = data;

const animalOld = (animal) => {
  const final = species.find(({ id: id2 }) => id2 === animal)
    .residents.sort(({ age }, { age: age2 }) => age2 - age)[0];
  return Object.values(final);
};

const getOldestFromFirstSpecies = (id) => {
  const animalFirst = employees.find(({ id: findId }) => findId === id)
    .responsibleFor.find((element) => element);
  return animalOld(animalFirst);
};

module.exports = getOldestFromFirstSpecies;
