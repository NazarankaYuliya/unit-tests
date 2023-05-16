function filter(array, predicate) {
  if (typeof predicate === 'function') {
    return array.filter((el) => predicate(el));
  }

  if (Array.isArray(predicate)) {
    const key = predicate[0];
    const value = predicate[1];
    return array.filter((el) => {
      return el[key] === value;
    });
  }

  if (typeof predicate === 'object') {
    return array.filter((el) => {
      return el.active === predicate.active && el.age === predicate.age;
    });
  }
  if (typeof predicate === 'string') {
    return array.filter((el) => el[predicate] === true);
  }
}

module.exports = filter;
