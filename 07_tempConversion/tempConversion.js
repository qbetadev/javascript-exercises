const convertToCelsius = function(tempFahrenheit) {
  let tempCelsius = Math.round(5 / 9 * (tempFahrenheit - 32) * 10) / 10;
  return tempCelsius;
};

const convertToFahrenheit = function(tempCelsius) {
  let tempFahrenheit = Math.round((9 / 5 * tempCelsius + 32) * 10) / 10;
  return tempFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
