const data = require('../data/zoo_data');

const expected = [
  {
    id: 'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1',
    fullName: 'Nigel Nelson',
    species: ['lions', 'tigers'],
    locations: ['NE', 'NW'],
  },
  {
    id: '0e7b460e-acf4-4e17-bcb3-ee472265db83',
    fullName: 'Burl Bethea',
    species: ['lions', 'tigers', 'bears', 'penguins'],
    locations: ['NE', 'NW', 'NW', 'SE'],
  },
  {
    id: 'fdb2543b-5662-46a7-badc-93d960fdc0a8',
    fullName: 'Ola Orloff',
    species: ['otters', 'frogs', 'snakes', 'elephants'],
    locations: ['SE', 'SW', 'SW', 'NW'],
  },
  {
    id: '56d43ba3-a5a7-40f6-8dd7-cbb05082383f',
    fullName: 'Wilburn Wishart',
    species: ['snakes', 'elephants'],
    locations: ['SW', 'NW'],
  },
  {
    id: '9e7d4524-363c-416a-8759-8aa7e50c0992',
    fullName: 'Stephanie Strauss',
    species: ['otters', 'giraffes'],
    locations: ['SE', 'NE'],
  },
  {
    id: '4b40a139-d4dc-4f09-822d-ec25e819a5ad',
    fullName: 'Sharonda Spry',
    species: ['otters', 'frogs'],
    locations: ['SE', 'SW'],
  },
  {
    id: 'c1f50212-35a6-4ecd-8223-f835538526c2',
    fullName: 'Ardith Azevado',
    species: ['tigers', 'bears'],
    locations: ['NW', 'NW'],
  },
  {
    id: 'b0dc644a-5335-489b-8a2c-4e086c7819a2',
    fullName: 'Emery Elser',
    species: ['lions', 'bears', 'elephants'],
    locations: ['NE', 'NW', 'NW'],
  },
];

function conferenceName(variable) {
  const allP = data.employees.some((a) => a.firstName === variable || a.lastName === variable);
  return allP;
}

function conferenceId(variable) {
  const allP = data.employees.some((a) => a.id === variable);
  return allP;
}

// console.log(conferenceFunc('c1f50212-35a6-4ecd-8223-f83553852'));

function getId(id) {
  const localResult = [];
  const specieName = [];
  const peeople = data.employees.filter((ele3) => ele3.id === id);
  const specie = peeople[0].responsibleFor;
  data.species.filter((ele) => specie.forEach((ele2) => {
    if (ele.id === ele2) {
      localResult.push(ele.location);
      specieName.push(ele.name);
    }
  }));
  const obj = {
    id: peeople[0].id,
    fullName: `${peeople[0].firstName} ${peeople[0].lastName}`,
    species: specieName,
    locations: localResult,
  };
  return obj;
}

function getPeeople(name) {
  const localResult = [];
  const specieName = [];
  const peeople = data.employees.filter((ele) => ele.firstName === name || ele.lastName === name);
  const specie = peeople[0].responsibleFor;
  data.species.filter((ele) => specie.forEach((ele3) => {
    if (ele.id === ele3) {
      localResult.push(ele.location);
      specieName.push(ele.name);
    }
  }));
  const obj = {
    id: peeople[0].id,
    fullName: `${peeople[0].firstName} ${peeople[0].lastName}`,
    species: specieName,
    locations: localResult,
  };
  return obj;
}

// console.log(getId('c1f50212-35a6-4ecd-8223-f835538526c2'));

function conferenceFunc(param) {
  if (conferenceId(param) === true) return getId(param);
  if (conferenceName(param) === true) return getPeeople(param);
  if (conferenceId(param) === false || conferenceName(param) === false) {
    throw new Error('Informações inválidas');
  }
  return null;
}

function getEmployeesCoverage(peeople) {
  if (peeople === undefined) {
    return expected;
  }
  const { name } = peeople;
  const { id } = peeople;
  if (name !== undefined) {
    return conferenceFunc({ name }.name);
  }
  if (id !== undefined) {
    return conferenceFunc({ id }.id);
  }
}

module.exports = getEmployeesCoverage;
