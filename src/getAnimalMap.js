const data = require('../data/zoo_data');

// LOCAL NE:

function localNE(param) {
  const NE = [{ lions: [] }, { giraffes: [] }];
  const locationNE = data.species.filter((element) => element.location === 'NE');
  const lions = locationNE[0].residents;
  const giraffes = locationNE[1].residents;
  lions.forEach((element) => NE[0].lions.push(element.name));
  giraffes.forEach((element) => NE[1].giraffes.push(element.name));
  if (param === true) {
    const resultLions = { lions: NE[0].lions.sort() };
    const resultGiraffes = { giraffes: NE[1].giraffes.sort() };
    const result = [resultLions, resultGiraffes];
    return result;
  }
  return NE;
}

// function localNEmale(param) {
//   const NE = [{ lions: [] }, { giraffes: [] }];
//   const locationNE = data.species.filter((ele) => ele.location === 'NE');
//   const lionsFilter = locationNE[0].residents;
//   const giraffesFilter = locationNE[1].residents;
//   const lions = lionsFilter.filter((element) => element.sex === 'male');
//   const giraffes = giraffesFilter.filter((element) => element.sex === 'male');
//   lions.forEach((element) => NE[0].lions.push(element.name));
//   giraffes.forEach((element) => NE[1].giraffes.push(element.name));
//   if (param === true) {
//     const resultLions = { lions: NE[0].lions.sort() };
//     const resultGiraffes = { giraffes: NE[1].giraffes.sort() };
//     const result = [resultLions, resultGiraffes];
//     return result;
//   }
//   return NE;
// }

function localNEfemale(param) {
  const NE = [{ lions: [] }, { giraffes: [] }];
  const locationNE = data.species.filter((ele) => ele.location === 'NE');
  const lionsFilter = locationNE[0].residents;
  const giraffesFilter = locationNE[1].residents;
  const lions = lionsFilter.filter((element) => element.sex === 'female');
  const giraffes = giraffesFilter.filter((element) => element.sex === 'female');
  lions.forEach((element) => NE[0].lions.push(element.name));
  giraffes.forEach((element) => NE[1].giraffes.push(element.name));
  if (param === true) {
    const resultLions = { lions: NE[0].lions.sort() };
    const resultGiraffes = { giraffes: NE[1].giraffes.sort() };
    const result = [resultLions, resultGiraffes];
    return result;
  }
  return NE;
}

// LOCAL SE:

function localSE(param) {
  const SE = [{ penguins: [] }, { otters: [] }];
  const locationSE = data.species.filter((ele) => ele.location === 'SE');
  const penguins = locationSE[0].residents;
  const otters = locationSE[1].residents;
  penguins.forEach((element) => SE[0].penguins.push(element.name));
  otters.forEach((element) => SE[1].otters.push(element.name));
  if (param === true) {
    const resultPenguins = { penguins: SE[0].penguins.sort() };
    const resultOtters = { otters: SE[1].otters.sort() };
    const result = [resultPenguins, resultOtters];
    return result;
  }
  return SE;
}

// function localSEmale(param) {
//   const SE = [{ penguins: [] }, { otters: [] }];
//   const locationSE = data.species.filter((ele) => ele.location === 'SE');
//   const penguinsFilter = locationSE[0].residents;
//   const ottersFilter = locationSE[1].residents;
//   const penguins = penguinsFilter.filter((element) => element.sex === 'male');
//   const otters = ottersFilter.filter((element) => element.sex === 'male');
//   penguins.forEach((element) => SE[0].penguins.push(element.name));
//   otters.forEach((element) => SE[1].otters.push(element.name));
//   if (param === true) {
//     const resultPenguins = { penguins: SE[0].penguins.sort() };
//     const resultOtters = { otters: SE[1].otters.sort() };
//     const result = [resultPenguins, resultOtters];
//     return result;
//   }
//   return SE;
// }

function localSEfemale(param) {
  const SE = [{ penguins: [] }, { otters: [] }];
  const locationSE = data.species.filter((ele) => ele.location === 'SE');
  const penguinsFilter = locationSE[0].residents;
  const ottersFilter = locationSE[1].residents;
  const penguins = penguinsFilter.filter((element) => element.sex === 'female');
  const otters = ottersFilter.filter((element) => element.sex === 'female');
  penguins.forEach((element) => SE[0].penguins.push(element.name));
  otters.forEach((element) => SE[1].otters.push(element.name));
  if (param === true) {
    const resultPenguins = { penguins: SE[0].penguins.sort() };
    const resultOtters = { otters: SE[1].otters.sort() };
    const result = [resultPenguins, resultOtters];
    return result;
  }
  return SE;
}

// LOCAL NW:

function localNW(param) {
  const NW = [{ tigers: [] }, { bears: [] }, { elephants: [] }];
  const locationNW = data.species.filter((element) => element.location === 'NW');
  const tigers = locationNW[0].residents;
  const bears = locationNW[1].residents;
  const elephants = locationNW[2].residents;
  tigers.forEach((element) => NW[0].tigers.push(element.name));
  bears.forEach((element) => NW[1].bears.push(element.name));
  elephants.forEach((element) => NW[2].elephants.push(element.name));
  if (param === true) {
    const resultTigers = { tigers: NW[0].tigers.sort() };
    const resultBears = { bears: NW[1].bears.sort() };
    const resultElephants = { elephants: NW[2].elephants.sort() };
    const result = [resultTigers, resultBears, resultElephants];
    return result;
  }
  return NW;
}

// function localNWmale(param) {
//   const NW = [{ tigers: [] }, { bears: [] }, { elephants: [] }];
//   const locationNW = data.species.filter((ele) => ele.location === 'NW');
//   const tigersFilter = locationNW[0].residents;
//   const bearsFilter = locationNW[1].residents;
//   const elephantsFilter = locationNW[2].residents;
//   const tigers = tigersFilter.filter((element) => element.sex === 'male');
//   const bears = bearsFilter.filter((element) => element.sex === 'male');
//   const elephants = elephantsFilter.filter((element) => element.sex === 'male');
//   tigers.forEach((element) => NW[0].tigers.push(element.name));
//   bears.forEach((element) => NW[1].bears.push(element.name));
//   elephants.forEach((element) => NW[2].elephants.push(element.name));
//   if (param === true) {
//     const resultTigers = { tigers: NW[0].tigers.sort() };
//     const resultBears = { bears: NW[1].bears.sort() };
//     const resultElephants = { elephants: NW[2].elephants.sort() };
//     return [resultTigers, resultBears, resultElephants];
//   }
//   return NW;
// }

function localNWfemale(param) {
  const NW = [{ tigers: [] }, { bears: [] }, { elephants: [] }];
  const locationNW = data.species.filter((ele) => ele.location === 'NW');
  const tigersFilter = locationNW[0].residents;
  const bearsFilter = locationNW[1].residents;
  const elephantsFilter = locationNW[2].residents;
  const tigers = tigersFilter.filter((element) => element.sex === 'female');
  const bears = bearsFilter.filter((element) => element.sex === 'female');
  const elephants = elephantsFilter.filter((element) => element.sex === 'female');
  tigers.forEach((element) => NW[0].tigers.push(element.name));
  bears.forEach((element) => NW[1].bears.push(element.name));
  elephants.forEach((element) => NW[2].elephants.push(element.name));
  if (param === true) {
    const resultTigers = { tigers: NW[0].tigers.sort() };
    const resultBears = { bears: NW[1].bears.sort() };
    const resultElephants = { elephants: NW[2].elephants.sort() };
    return [resultTigers, resultBears, resultElephants];
  }
  return NW;
}

// LOCAL SW:

function localSW(param) {
  const SW = [{ frogs: [] }, { snakes: [] }];
  const locationSW = data.species.filter((element) => element.location === 'SW');
  const frogs = locationSW[0].residents;
  const snakes = locationSW[1].residents;
  frogs.forEach((element) => SW[0].frogs.push(element.name));
  snakes.forEach((element) => SW[1].snakes.push(element.name));
  if (param === true) {
    const resultFrogs = { frogs: SW[0].frogs.sort() };
    const resultSnakes = { snakes: SW[1].snakes.sort() };
    const result = [resultFrogs, resultSnakes];
    return result;
  }
  return SW;
}

// function localSWmale(param) {
//   const SW = [{ frogs: [] }, { snakes: [] }];
//   const locationSW = data.species.filter((ele) => ele.location === 'SW');
//   const frogsFilter = locationSW[0].residents;
//   const snakesFilter = locationSW[1].residents;
//   const frogs = frogsFilter.filter((element) => element.sex === 'male');
//   const snakes = snakesFilter.filter((element) => element.sex === 'male');
//   frogs.forEach((element) => SW[0].frogs.push(element.name));
//   snakes.forEach((element) => SW[1].snakes.push(element.name));
//   if (param === true) {
//     const resultFrogs = { frogs: SW[0].frogs.sort() };
//     const resultSnakes = { snakes: SW[1].snakes.sort() };
//     const result = [resultFrogs, resultSnakes];
//     return result;
//   }
//   return SW;
// }

function localSWfemale(param) {
  const SW = [{ frogs: [] }, { snakes: [] }];
  const locationSW = data.species.filter((ele) => ele.location === 'SW');
  const frogsFilter = locationSW[0].residents;
  const snakesFilter = locationSW[1].residents;
  const frogs = frogsFilter.filter((element) => element.sex === 'female');
  const snakes = snakesFilter.filter((element) => element.sex === 'female');
  frogs.forEach((element) => SW[0].frogs.push(element.name));
  snakes.forEach((element) => SW[1].snakes.push(element.name));
  if (param === true) {
    const resultFrogs = { frogs: SW[0].frogs.sort() };
    const resultSnakes = { snakes: SW[1].snakes.sort() };
    const result = [resultFrogs, resultSnakes];
    return result;
  }
  return SW;
}

//  INCLUDES NAME FUNCTIONS:

function includeNamesFunc(param) {
  const NEresult = {
    NE: localNE(param),
    NW: localNW(param),
    SE: localSE(param),
    SW: localSW(param),
  };
  return NEresult;
}

// function includeNamesFuncMale(param) {
//   const NEresult = {
//     NE: localNEmale(param),
//     NW: localNWmale(param),
//     SE: localSEmale(param),
//     SW: localSWmale(param),
//   };
//   return NEresult;
// }

function includeNamesFuncFemale(param) {
  const NEresult = {
    NE: localNEfemale(param),
    NW: localNWfemale(param),
    SE: localSEfemale(param),
    SW: localSWfemale(param),
  };
  return NEresult;
}

function noParamFunc() {
  const locationNE = data.species.filter((element) => element.location === 'NE');
  const resultNE = [locationNE[0].name, locationNE[1].name];
  const locationNW = data.species.filter((element) => element.location === 'NW');
  const resultNW = [locationNW[0].name, locationNW[1].name, locationNW[2].name];
  const locationSE = data.species.filter((element) => element.location === 'SE');
  const resultSE = [locationSE[0].name, locationSE[1].name];
  const locationSW = data.species.filter((element) => element.location === 'SW');
  const resultSW = [locationSW[0].name, locationSW[1].name];
  const obj = {
    NE: resultNE,
    NW: resultNW,
    SE: resultSE,
    SW: resultSW,
  };
  return obj;
}

function sexVerification(opções) {
  const { includeNames, sex, sorted } = opções;
  if (sex === 'female' && includeNames === true === sorted === true) {
    return includeNamesFuncFemale(true);
  }
  if (sex === 'female' && includeNames === true) return includeNamesFuncFemale();
  return noParamFunc();
}

function getAnimalMap(opções) {
  if (opções === undefined) return noParamFunc();
  const { includeNames, sex, sorted } = opções;
  if (sex === 'female') return sexVerification(opções);
  if (includeNames === true && sorted === true) return includeNamesFunc(true);
  return includeNamesFunc();
}

console.log(getAnimalMap({ includeNames: true, sex: 'female' }));

module.exports = getAnimalMap;
