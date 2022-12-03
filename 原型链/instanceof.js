function myInstanceOf(leftObj, rightObj) {
  let leftProto = leftObj.__proto__;

  while (leftProto) {
    if (leftProto === rightObj.prototype) {
      return true;
    }

    leftProto = leftProto.__proto__;
  }

  return false;
}



function Person(name) {
  this.name = name;
}

const man = new Person('wym YYDS');

console.log(Person instanceof Object);
console.log(Person instanceof Function);

console.log(man instanceof Person);
console.log(man instanceof Function);


console.log(myInstanceOf(Person, Object));
console.log(myInstanceOf(Person, Function));
console.log(myInstanceOf(man, Person));
console.log(myInstanceOf(man, Function));


