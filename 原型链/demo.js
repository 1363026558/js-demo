/**
 * 引用类型
 * 1. 引用类型都有对象特性，可自由扩展属性
 * 2. 引用类型都有一个隐式类型，__proto__
 * 3. 隐式类型都指向它的构造函数的显式原型prototype属性值
 * 4. 当你寻找一个引用类型的属性时，如果在它自身上找不到，它会在自己的构造函数的原型prototype上寻找
 */

// 举个🌰，佐证4的说法。新建一个构造函数
function Person(name) {
  this.name = name;
}

Person.prototype.say = function() {
  return `${this.name}哈哈哈哈`;
}

const man = new Person('wym');
// toString方法从哪里来？
console.log(man.say()); // [object Object]
// 打印一下man实例的__proto__
console.log('man.__proto__', man.__proto__); // { say: [Function (anonymous)] }
console.log('Person.__proto__', Person.__proto__); // {}
console.log('Person.prototype.constructor', Person.prototype.constructor); // [Function: Person]
console.log('Person.prototype.constructor', Person.prototype.constructor); // [object Object]
console.log('Object.__proto__', Object.__proto__); // null





