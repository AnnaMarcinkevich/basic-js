const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  str = String(str);
  options.addition = String(options.addition);
  if (options.addition == "undefined") options.addition = "";
  options.additionSeparator = String(options.additionSeparator);
  if (options.additionSeparator == "undefined") options.additionSeparator = "|";
  options.separator = String(options.separator);
  if (options.separator == "undefined") options.separator = "+";
  strAdd = ""; //строка, которую будем дописывать к основной
  let mas = [];
  mas.push(options.addition);
  while (options.additionRepeatTimes > 1) {
    mas.push(options.addition);
    options.additionRepeatTimes--;
  }
  str += mas.join(options.additionSeparator);
  mas = [];
  mas.push(str);
  while (options.repeatTimes > 1) {
    mas.push(str);
    options.repeatTimes--;
  }
  return mas.join(options.separator);
};

const myObj = {
  repeatTimes: 0, //sets the number of repetitions of the str;
  separator: "", //is a string separating repetitions of the str;
  addition: "", //is an additional string that will be added to each repetition of the str;
  additionRepeatTimes: 0, //sets the number of repetitions of the addition;
  additionSeparator: "", //is a string separating repetitions of the addition.
};

/*console.log(
  repeater(null, {
    repeatTimes: 3,
    separator: "??? ",
    addition: null,
    additionRepeatTimes: 3,
    additionSeparator: "!!!",
  })
);*/

//console.log(repeater("la", { repeatTimes: 3 }));
//console.log(myObj);
