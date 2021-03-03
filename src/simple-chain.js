const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [], //сама цепь
  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    this.chain.push(String(value));
    return this;
  },

  removeLink(position) {
    //проверяем, чтобы значение было целым
    if (Number.isInteger(position)) {
      //проверяем, чтобы такой номер в цепочке существовал
      if (position >= 0 && position <= this.chain.length - 1) {
        this.chain.splice(position - 1, 1); //удаляем
      }
    } else {
      this.chain = [];
      throw new Error();
    }
    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    let str = this.chain.join(" )~~( ");
    str = "( " + str + " )";
    this.chain = [];

    return str;
  },
};

module.exports = chainMaker;
