const data = require('../data/zoo_data');

const { species } = data;

const saida = (param) => species.filter(({ location }) => location === param);

const paramIncludes = (param) => ({
  NE: saida('NE').map((element) => element[param]),
  NW: saida('NW').map((element) => element[param]),
  SE: saida('SE').map((element) => element[param]),
  SW: saida('SW').map((element) => element[param]),
});

const funTestGenre = (param, param2) => {
  const newObj = {};
  const location = ['NE', 'NW', 'SE', 'SW'];
  location.forEach((a) => {
    newObj[a] = saida(a).map((na) => ({ [na.name]: (param) ? (na.residents
      .filter(({ sex }) => sex === param2).map((d) => d.name)).sort() : (na.residents
      .filter(({ sex }) => sex === param2).map((d) => d.name)) }));
  });
  return newObj;
};

const funTest = (param, sex) => {
  if (sex) {
    return funTestGenre(param, sex);
  }
  const newObj = {};
  const location = ['NE', 'NW', 'SE', 'SW'];
  location.forEach((element) => {
    newObj[element] = saida(element).map((newE) => ({ [newE.name]: (param) ? ((newE.residents
      .map((animal) => animal.name)).sort()) : newE.residents.map((animal) => animal.name) }));
  });
  return newObj;
};

const getAnimalMap = (options) => {
  if (!options || !options.includeNames) {
    return paramIncludes('name');
  }
  if (options.includeNames) {
    return funTest(options.sorted, options.sex);
  }
  return funTest();
};

module.exports = getAnimalMap;
