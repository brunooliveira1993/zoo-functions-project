const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const child = entrants.filter((element) => element.age < 18);
  const adult = entrants.filter((element) => element.age >= 18 && element.age < 50);
  const senior = entrants.filter((element) => element.age >= 50);
  const obj = {
    child: child.length,
    adult: adult.length,
    senior: senior.length,
  };
  return obj;
}

function calculateEntry(entrants) {
  if (!Array.isArray(entrants)) {
    return 0;
  }
  const peeoples = countEntrants(entrants);
  const childPay = peeoples.child * 20.99;
  const adultPay = peeoples.adult * 49.99;
  const seniorPày = peeoples.senior * 24.99;
  return childPay + adultPay + seniorPày;
}

console.log(calculateEntry());

module.exports = { calculateEntry, countEntrants };
