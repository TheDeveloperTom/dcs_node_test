const CLEANUP_TIME = 3600000; // 1 hour in milliseconds
const metrics = {};

const addValue = (key, value) => {
  const roundedValue = Math.round(value);
  metrics[key] = (metrics[key] || 0) + roundedValue;
  setTimeout(() => (metrics[key] -= roundedValue), CLEANUP_TIME);
};
const getSum = key => metrics[key] || 0;

module.exports = {
  add,
  get
};
