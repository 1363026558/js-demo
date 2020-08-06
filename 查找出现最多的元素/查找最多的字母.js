let str = "    dffiu  aefiueuf";
let num = str.match(/[a-zA-Z]/g).length;
let len = str.match(/[a-zA-Z]/g);
let obj = {};
for (let i = 0; i < len.length; i++) {
  let key = len[i];
  if (!obj[key]) {
    obj[key] = [1];
  } else {
    obj[key].push(1);
  }  
}
console.log(obj);
// console.log(len);
// console.log(num);
let max = 0, name;
let all = [];
for (let key in obj) {
  if (obj[key].length === max) {
    max = obj[key].length;
    all.push(key);
  } else if (obj[key].length > max) {
    max = obj[key].length;
    all = [];
    all[0] = key;
  }
}
console.log(`最大的为${all}出现了${obj[all[0]].length}次`);
