// console.log(0.1 + 0.2); // 0.30000000000000004

// var isPalindrome = function(x) {
//   x = String(x).split('');
//   a = x.reverse();
//   if (x === a.toString()) {
//     console.log('zhen');
//   } else {
//     console.log('jia');
//   }
//   console.log(x);
//     console.log(x.reverse());
// };

// isPalindrome(-121)

var removeDuplicates = function(num) {
  let arr = [];
  for (let i = 0; i < num.length; i++) {
    if (arr.length === 0) {
      arr.push(num[i]);
    } else {
      for (let j = 0; j < arr.length; j++) {
        if (num[i] === arr[j]) {
          break;
        } else if (num[i] !== arr[j] && j === arr.length - 1) {
          arr.push(num[i]);
        }
      }
    }
  }
  console.log(arr);
};
removeDuplicates([1,1,2,1,5,5,6,21,4,8,9,4,12,21,5]);