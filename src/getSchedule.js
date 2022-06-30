const data = require('../data/zoo_data');

function animalConsult(animal) {
  const verifyAnimal = data.species.filter((element) => element.name === animal);
  return verifyAnimal[0].availability;
}

function dayConsult(day) {
  const verifyDay = data.species.filter((element) => element.availability.includes(day));
  return verifyDay.map((element2) => element2.name);
}

const notParam = {
  Tuesday: {
    officeHour: 'Open from 8am until 6pm',
    exhibition: dayConsult('Tuesday'),
  },
  Wednesday: {
    officeHour: 'Open from 8am until 6pm',
    exhibition: dayConsult('Wednesday'),
  },
  Thursday: {
    officeHour: 'Open from 10am until 8pm',
    exhibition: dayConsult('Thursday'),
  },
  Friday: {
    officeHour: 'Open from 10am until 8pm',
    exhibition: dayConsult('Friday'),
  },
  Saturday: {
    officeHour: 'Open from 8am until 10pm',
    exhibition: dayConsult('Saturday'),
  },
  Sunday: {
    officeHour: 'Open from 8am until 8pm',
    exhibition: dayConsult('Sunday'),
  },
  Monday: {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!',
  },
};

function dayResult(day) {
  const objeto = {};
  objeto[day] = notParam[day];
  return objeto;
}

const mondayResult = {
  Monday: notParam.Monday,
};

const days = ['Tuesday', 'Thursday', 'Saturday', 'Sunday', 'Friday', 'Wednesday'];
const allAnimals = ['lions', 'tigers',
  'bears', 'penguins',
  'otters', 'frogs',
  'snakes', 'elephants'];

function verifyFunc(variable) {
  const verify = days.some((element) => variable === element);
  const verify2 = allAnimals.some((element2) => variable === element2);
  if (verify === false && verify2 === false) {
    return true;
  }
  return false;
}
// console.log(verifyFunc('qualquercoisa'));

function getSchedule(scheduleTarget) {
  if (scheduleTarget === 'Monday') return mondayResult;
  if (verifyFunc(scheduleTarget) === true) return notParam;
  let param = '';
  days.forEach((element) => {
    if (element === scheduleTarget) param = dayResult(scheduleTarget);
  });
  if (param === '') param = animalConsult(scheduleTarget);
  return param;
}

module.exports = getSchedule;
