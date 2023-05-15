function compact(array) {
  return array.filter((value) => !!value);
}

module.exports = compact;
