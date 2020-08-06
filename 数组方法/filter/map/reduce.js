// filter: 检查数组中所有满足条件的元素，并且返回一个新数组，不会改变旧数组，同时也不会处理空数组。
let arr = [1 ,12, 56, 24, 15, 26];
let newArr = arr.filter(per => {
  return per > 18;
});
console.log('arr: ', arr);
console.log('newArr', newArr);
/*
arr:  [ 1, 12, 56, 24, 15, 26 ]
newArr [ 56, 24, 26 ]
*/


// map； 返回一个新数组，新数组的元素为原始数组中的元素调用函数处理后得到的值。不会检查空数组，不影响旧数组的元素
let arr1 = [1, 5, 2, 5, 6, 2.5];
let newArr1 = arr1.map(per => {
  return per * 5;
});
console.log('arr1: ', arr1);
console.log('newArr1', newArr1);
/*
arr1:  [ 1, 5, 2, 5, 6, 2.5 ]
newArr1 [ 2, 10, 4, 10, 12, 5 ]
*/

// reduce：接受一个函数为累加器，数组的每个值都从左到右进行累加，最终计算一个值
let arr2 = [1, 5, 2, 5, 6, 2.5];
let newArr2 = arr2.reduce((total, num) => {
  return total + num;
});
console.log('arr2: ', arr2);
console.log('newArr2', newArr2);
/*
arr2:  [ 1, 5, 2, 5, 6, 2.5 ]
newArr2 21.5
*/