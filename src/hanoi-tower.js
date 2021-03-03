const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let result = {
    // объект
    turns: 2 ** disksNumber - 1,
    seconds: 0,
  };
  result.seconds = Math.floor((result.turns * 3600) / turnsSpeed);
  return result;
};
