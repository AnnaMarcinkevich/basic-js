const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  if (members.length==0) return "FAIL";
  let masRez=[];
  for (let i of members) {
    if (typeof i == "string") masRez.push(i.trim()[0].toUpperCase());
  }
  return masRez.sort().join("");
};

