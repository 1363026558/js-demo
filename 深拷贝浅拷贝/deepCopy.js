const obj1 = {
  name: 'wym',
  age: 18,
  others: {
    height: 188,
    friends: {
      son: 'xiaobin'
    }
  }
};
const obj2 = {};

/*
要求：将obj2深拷贝obj1的内容
*/
function deepCopy (target, source) {
  for (let key in source) {
    if (source[key] instanceof Object) {
      target[key] = new source[key].constructor;
      deepCopy(target[key], source[key]);
    } else {
      target[key] = source[key];
    }
  }
 
}
deepCopy (obj2, obj1);


/*
浅拷贝： Object.assign(target, source);
*/
let a = {};
Object.assign(a, obj1);
obj1.others.height = 150;
console.log('a', a);
console.log('obj2', obj2)


