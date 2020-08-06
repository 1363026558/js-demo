let str = "  csdcsds d57dsdsds sdsd   ";
String.prototype.myTrim = function () {
  let reg = new RegExp(/^\s+|\s$/g);
  return str.replace(reg, "");
}
console.log(str.myTrim());


