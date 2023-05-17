const { myPush } = require('./servicemethods');

function toPairs(object) {
  const result = [];
  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      myPush(result, [key, object[key]]);
    }
  }
  return result;
}

module.exports = toPairs;
