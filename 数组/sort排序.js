/**
 * 数组排序,按照元素的编码顺序进行的
 */
let arr = ['a','s','f','h','y','r','e','u','h','g','f'];
// console.log(arr.sort()); // ['a', 'e', 'f', 'f','g', 'h', 'h', 'r','s', 'u', 'y']
 /**
  * 可以进行数字排序，先编写一个排序函数
  */
 
 function sortNum(a, b) {
  return a-b;
}
let arr2 = [1,5,4,9,6,4,2,54,548,5,45,45,5]
let a = arr2.sort(sortNum);
// console.log(a); // [1, 2, 4, 4, 5, 5, 5, 6, 9, 45, 45, 54, 548]


let total = 824 + 280;
let vic = (824 * 0.666) + (280*0.8);

let now = vic / total;
console.log(now);
