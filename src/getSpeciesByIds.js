const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (ids.length > 0) {
    return data.species.filter((element) => ids.includes(element.id));
  }
  return [];
}

module.exports = getSpeciesByIds;
