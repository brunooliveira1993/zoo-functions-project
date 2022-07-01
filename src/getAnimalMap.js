const data = require('../data/zoo_data');

function namesFilter(name) {
  const filtro = data.species.map((element) => element)
  return filtro
}

console.log(namesFilter('lions'))

function getAnimalMap(options) {
  // seu código aqui
}

module.exports = getAnimalMap;
