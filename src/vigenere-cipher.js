const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  //коструктор класса
  constructor(state = true) {
    this.machine = state;
    this.letters = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
  }

  encrypt(message, key) {
    if (message == undefined || key == undefined) throw new Error(); //если какой-либо из параметров не задан
    message = message.toUpperCase(); //переводим строки в верхний регистр
    key = key.toUpperCase();
    //если длина сообщения больше длины ключа, то повторяем ключ столько раз, чтобы его длины хватило для шифрации
    while (message.length > key.length) {
      key += key;
    }
    let rezStr = [];
    let position = 0;
    let i = 0;
    let j = 0;
    ////KAYIWIAMMOUIW
    while (i < message.length) {
      if (this.letters.indexOf(message[i]) == -1) {
        rezStr.push(message[i++]);
        continue;
      }
      position =
        this.letters.indexOf(message[i]) + this.letters.indexOf(key[j]); //вычисляем позицию нового символа
      if ((position) => 26) position = position % 26;
      rezStr.push(this.letters[position]);
      i++;
      j++;
    }
    if (!this.machine) rezStr = rezStr.reverse();
    return rezStr.join("");
  }

  decrypt(encryptedMessage, key) {
    if (encryptedMessage == undefined || key == undefined) throw new Error(); //если какой-либо из параметров не задан
    encryptedMessage = encryptedMessage.toUpperCase(); //переводим строки в верхний регистр
    key = key.toUpperCase();
    //если длина сообщения больше длины ключа, то повторяем ключ столько раз, чтобы его длины хватило для шифрации
    while (encryptedMessage.length > key.length) {
      key += key;
    }
    let rezStr = [];
    let position = 0;
    let i = 0;
    let j = 0;
    while (i < encryptedMessage.length) {
      if (this.letters.indexOf(encryptedMessage[i]) == -1) {
        rezStr.push(encryptedMessage[i++]);
        continue;
      }

      position =
        this.letters.indexOf(encryptedMessage[i]) -
        this.letters.indexOf(key[j]); //вычисляем позицию нового символа
      if (position < 0) position += 26;
      rezStr.push(this.letters[position]);
      i++;
      j++;
    }

    if (!this.machine) rezStr = rezStr.reverse();
    return rezStr.join("");
  }
}

module.exports = VigenereCipheringMachine;

//let obj = new VigenereCipheringMachine(false);
//obj.encrypt("dsf");
//console.log(obj.encrypt("Samelengthkey", "Samelengthkey"));

//console.log(obj.decrypt("UWJJW X", "js"));
