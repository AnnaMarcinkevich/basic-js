const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error();
  }
  let n = arr.length - 1;
  let mas = [];
  let i = 0;
  while (i <= n) {
    switch (arr[i]) {
      case "--discard-next": {
        if (i != n) {
          i += 2;
          continue;
        }
        i++;
        continue;
      }
      case "--discard-prev": {
        if (i != 0 && arr[i - 2] == "--discard-next") {
          i++;
          continue;
        } else {
          if (i != 0) mas.pop();
          i++;
        }
        continue;
      }
      case "--double-next": {
        if (i != n) mas.push(arr[i + 1]);
        i++;

        continue;
      }
      case "--double-prev":
        {
          if (arr[i - 2] == "--discard-next") {
            i++;
            continue;
          }
          if (i != 0) mas.push(arr[i - 1]);
          i++;
        }
        continue;
    }
    mas.push(arr[i]);
    i++;
  }

  return mas;
};
