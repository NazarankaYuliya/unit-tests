const { myFilter } = require('./servicemethods');

function filter(array, predicate) {
  if (typeof predicate === 'function') {
    return myFilter(array, predicate);
  }

  if (Array.isArray(predicate)) {
    return myFilter(array, (el) => el[predicate[0]] === predicate[1]);
  }

  if (typeof predicate === 'object') {
    return myFilter(
      array,
      (el) => el.active === predicate.active && el.age === predicate.age,
    );
  }
  if (typeof predicate === 'string') {
    return myFilter(array, (el) => el[predicate] === true);
  }
}

module.exports = filter;
