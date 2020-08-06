/*
1. 原型链继承
引用类型的属性被所有实例共享
在创建Child的实例时，不能向Parent传参
*/
function Parent() {
  this.name = "wym";
}
Parent.prototype.getName = function() {
  console.log(this.name);
}
function Child() {}
Child.prototype = new Parent();
let child1 = new Child();
child1.getName();