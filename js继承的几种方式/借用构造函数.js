function Parent() {
  this.names = ['Wym', 'lxy'];
}
function Child() {
  Parent.call(this);
}
let child1 = new Child();
child1.names.push('bb');
console.log(child1.names);
let child2 = new Child();
console.log(child2.names);

/*
借用构造函数（经典继承）
1.避免了引用类型的属性被所有实例共享
2.都可以在Child中向Parent传参
3.方法都在构造函数中定义，每次创建实例都会创建一遍方法
*/
