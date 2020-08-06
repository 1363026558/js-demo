// 判断一个数据是否为数组？
let arr = [1,2,34,,54,65,6];
/**
 * 1. 使用typeof判断？
 * 在typeof判断中，Array类型被归到了Object数据类中
 * console.log(typeof(arr)); // object
 * 所以是不可行的
 */

/**
 * 2. instanceof是判断某个构造函数的原型指向的对象是否存在将要检测对象的原型链上
 * 所以是可行的
 * console.log(arr instanceof Array); // true
 * console.log(arr instanceof Object); // true
 */


 /**
  * 3. 使用constructor判断
  * 实例化的数组拥有一个constructor属性，这个属性指向生成这个数组的方法
  * console.log(arr.constructor); // [Function: Array]
  * 以上的代码说明，数组是由Array的函数实例化的
  * 缺点： constructor的属性是可以被改写的:
  * arr.constructor = Object;
    console.log(arr.constructor);// [Function: Object]
  */
 
let a =  arr.indexOf(0);
// console.log(a);

let aa = (21 * 2.54) * 1;
let bb = (23.8 * 2.54) * 1;
let cc = (27 * 2.54) * 1;
console.log('aa---', aa);
console.log('bb---', bb);
console.log('cc---', cc);
