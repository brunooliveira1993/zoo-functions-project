const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const specie = data.species.filter((element) => element.name === animal);
  const [first] = specie;
  return first.residents.every((obj) => obj.age >= age);
}

module.exports = getAnimalsOlderThan;
