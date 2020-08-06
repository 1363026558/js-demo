/*
es6的数据结构Set
*/
let arr = [1,1,2,5,4,2,3,6,58,94,6,6,2,4];
let arr2 = [];
//  console.log([...new Set([...arr])]);
 

/**
 * 数组遍历
 */
// for(let i = 0; i < arr.length; i++) {
//   if(arr[i] === arr[i+1]) {
//     let j = i + 1;
//     while (arr[i] === arr[j]) {
//         arr.splice(j, 1);
//     }
//   }
// }
// console.log(arr);
var removeDuplicates = function(nums) {
  let index = 0
  for( let i=0,len=nums.length; i<len; i++ ){
      if( nums[i] != nums[i+1] ) {
          nums[index] = nums[i]
          index++
      }
  }
  console.log(index);
};
removeDuplicates(arr);