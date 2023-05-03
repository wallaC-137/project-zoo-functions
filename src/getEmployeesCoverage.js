const data = require('../data/zoo_data');

const { employees, species } = data;

const funEmployees = () => {
  const newObj = employees.map(({ id, firstName, lastName, responsibleFor: respo }) => ({
    id,
    fullName: `${firstName} ${lastName}`,
    species: species.filter(({ id: id2 }) => respo.includes(id2)).map(({ name }) => name),
    locations: species.filter(({ id: id2 }) => respo.includes(id2)).map(({ location }) => location),
  }));
  return newObj;
};

const getEmployeesCoverage = (searchName) => {
  if (searchName === undefined) {
    return funEmployees();
  }

  if (employees.find(({ id, lastName, firstName }) => id === searchName
    .id || firstName === searchName.name || lastName === searchName.name) === undefined) {
    throw new Error('Informações inválidas');
  }

  return funEmployees().find(({ id, fullName }) => id === searchName.id || fullName
    .split(' ').includes(searchName.name));
};

module.exports = getEmployeesCoverage;
