const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return [];
  const result = data.employees.filter((element) =>
    element.firstName === employeeName || element.lastName === employeeName);
  return result[0];
}

module.exports = getEmployeeByName;
