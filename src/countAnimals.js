const data = require('../data/zoo_data');

function allAnimals() {
  const animals = data.species.filter((element) => element.residents);
  const obj = {};
  animals.forEach((element) => {
    obj[element.name] = element.residents.length;
  });
  return obj;
}
console.log(allAnimals());

function countAnimals(animal) {
  if (animal === undefined) {
    return allAnimals();
  }
  const { sex } = animal;
  const { specie } = animal;
  // const obj = {};
  const animale = data.species.filter((element) => element.name === specie);
  if (sex !== undefined) {
    const sexAnimals = animale[0].residents.filter((element2) => element2.sex === sex);
    return sexAnimals.length;
  }
  const animalsNumber = animale[0].residents.length;
  return animalsNumber;
}

module.exports = countAnimals;
