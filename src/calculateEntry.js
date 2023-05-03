const data = require('../data/zoo_data');

const { prices } = data;
const { adult, senior, child } = prices;

const countEntrants = (entrants1) => {
  const count = {
    adult: 0,
    senior: 0,
    child: 0,
  };
  entrants1.forEach(({ age }) => {
    if (age < 18) {
      count.child += 1;
    } else if (age >= 18 && age < 50) {
      count.adult += 1;
    } else {
      count.senior += 1;
    }
  });
  return count;
};

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }

  const newObj = countEntrants(entrants);
  if (typeof entrants === 'object') {
    return (newObj.adult * adult) + (newObj.senior * senior) + (newObj.child * child);
  }
}

module.exports = { calculateEntry, countEntrants };
