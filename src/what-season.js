const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date == null) {
    return "Unable to determine the time of year!";
  }
  if (
    date.getFullYear() <= 0 ||
    date.getMonth() < 0 ||
    date.getDate() <= 0 ||
    date.getMonth() > 12 ||
    date.getDate() > 31 ||
    +date == undefined
  ) {
    throw new Error();
  }
  switch (date.getMonth()) {
    case 0:
    case 1:
    case 11:
      return "winter";
    case 2:
    case 3:
    case 4:
      return "spring";
    case 5:
    case 6:
    case 7:
      return "summer";
    default:
      return "autumn";
  }
};
