const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(employeeId) {
  const peeople = data.employees.filter((element) => element.id === employeeId);
  const specie = peeople[0].responsibleFor[0];
  const animal = data.species.filter((element2) => element2.id === specie);
  const residentAnimals = animal[0].residents;
  const ageAnimals = residentAnimals.map((element3) => element3.age);
  let ageBase = 0;
  ageAnimals.forEach((element4) => {
    if (element4 > ageBase) {
      ageBase = element4;
    }
  });
  const oldAnimal = residentAnimals.filter((element5) => element5.age === ageBase);
  const teste = oldAnimal[0];
  const testeName = teste.name;
  const { sex } = teste;
  const idade = teste.age;
  const arr = [testeName, sex, idade];
  return arr;
}

module.exports = getOldestFromFirstSpecies;
