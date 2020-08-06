let str = "  sdsadsa  dsada   ";
String.prototype.a = function () {
  let reg = /^\s+|\s+$/g;
  console.log(this.replace(reg, ""));
  return this.replace(reg, "");
}
str.a();  