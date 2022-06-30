const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees.some((element) => element.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === true) {
    const result = data.employees.filter((element) => element.managers[0] === managerId);
    const peoples = [];
    result.forEach((ids) => peoples.push(`${ids.firstName} ${ids.lastName}`));
    return peoples;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
