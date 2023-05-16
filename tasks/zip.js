const { myPush } = require('./servicemethods');

function zip(...arrays) {
  const result = [];
  const len = arrays[0].length;

  for (let i = 0; i < len; i++) {
    const group = [];

    for (const arr of arrays) {
      myPush(group, arr[i]);
    }
    myPush(result, group);
  }

  return result;
}

module.exports = zip;
[];
