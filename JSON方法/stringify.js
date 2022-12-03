function myStringify(obj) {
  const type = Object.prototype.toString.call(obj);

  if (type) {

  }
}


const obj = {
  no: undefined, // 忽略
  sym: Symbol(123), // 忽略
  func: (val) => {}, // 忽略
  func: new Function(), // 忽略
  str: '123',
  num: 123,
  bool: true,
  nul: null,
  arr: [1, 2, 3],
  obj1: {
    a: 1
  },
  reg: new RegExp(/[0-9]/, 'i'),
  date: new Date(),
  arrs: [new RegExp(/[0-9]/, 'i'), new Function(), undefined, Symbol(1), null, new Date()],
  map: new Map(),
}

const strs = JSON.stringify(obj);

console.log('strs', strs);
console.log('obj', JSON.parse(strs));
console.log('obj', JSON.stringify(true));

