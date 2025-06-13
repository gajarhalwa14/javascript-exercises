const convertToCelsius = function(temperature) {
  const number = ((temperature - 32) * (5/9));
  return Number(number.toFixed(1));
};

const convertToFahrenheit = function(temperature) {
  const number = ((9/5) * temperature) + 32;
  return Number(number.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
