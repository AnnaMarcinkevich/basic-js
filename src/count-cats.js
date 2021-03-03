const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let sum = 0;
  for (let i of matrix)
    for (let j of i) {
      if (j == "^^") sum++;
    }

  return sum;
};
