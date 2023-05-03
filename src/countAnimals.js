const data = require('../data/zoo_data');

const { species } = data;

const countAnimals = (animal) => {
  const obj = {};
  const myValue = animal ? Object.values(animal) : animal;

  if (animal === undefined) {
    species.forEach(({ name, residents }) => {
      obj[name] = residents.length;
    });
    return obj;
  }

  if (animal.sex !== undefined) {
    const pt1 = species.filter(({ name }) => myValue[0] === name);
    return pt1[0].residents.filter(({ sex }) => sex === myValue[1]).length;
  }
  return species.find(({ name }) => myValue.includes(name)).residents.length;
};

module.exports = countAnimals;
