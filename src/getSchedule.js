const data = require('../data/zoo_data');

const { species } = data;
const { hours } = data;

const animalsDays = (param) => species.filter(({ availability }) => availability.includes(param))
  .map(({ name }) => name);

const createObjDays = (dia) => {
  const dayKeys = Object.keys(hours);
  const newObj = {};

  dayKeys.forEach((day) => {
    newObj[day] = { officeHour: (hours[day].open !== 0) ? `Open from ${
      hours[day].open}am until ${hours[day].close}pm` : 'CLOSED',
    exhibition: day === 'Monday' ? 'The zoo will be closed!' : animalsDays(day) };
  });
  return dayKeys.includes(dia) ? { [dia]: newObj[dia] } : newObj;
};

const getSchedule = (scheduleTarget) => {
  if (typeof scheduleTarget === 'string') {
    const testAnimal = species.find(({ name }) => name === scheduleTarget);
    return testAnimal ? testAnimal.availability : createObjDays(scheduleTarget);
  }
  if (scheduleTarget === undefined) {
    return createObjDays();
  }
};

module.exports = getSchedule;
