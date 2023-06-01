const { myFind } = require('./servicemethods');

function find(array, predicate, index) {
  if (typeof predicate === 'function') {
    return myFind(array, predicate, index);
  }

  if (Array.isArray(predicate)) {
    return myFind(array, (el) => el[predicate[0]] === predicate[1]);
  }

  if (typeof predicate === 'object') {
    return myFind(
      array,
      (el) => el.age === predicate.age && el.active === predicate.active,
    );
  } else {
    return myFind(array, (el) => el[predicate] === true);
  }
}

module.exports = find;
