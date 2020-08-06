/**
 * js的对象(Object)，本质上是键值对的集合（Hash结构），但是传统上只能用字符串当作键
 *  const data = {};
    const element = document.getElementById('myDiv');

    data[element] = 'metadata';
    data['[object HTMLDivElement]'] // "metadata"
 */


/**
 * 上面的代码原意是将DOM节点作为对象data的键，
 * 但是由于对象只接收字符串作为键名，
 * 所以element被自动转化成字符串[object HTMLDivElemnt]
 * 为了解决这问题，ES6提供了Map数据结构：
 * 类似于对象，但是键的取值范围不止为字符串，各种类型的值包括对象都可以作为键
 * Object提供了：字符串--值  的对应
 * Map结构提供了：值-值  的对应
 * 是一种更完整的Hash结构实现，
 */

 const m = new Map();
 const o = {p: 'wym'};
 m.set(o, 'wangyiming');
 m.get(o); //wangyiming
 m.has(o); // true
 m.delete(o); // true
 m.has(o); // false
 m.size;

 /**
  * Map可以接受数组作为参数
  * 当代码在新建Map实例时，就直接指定了两个件name和title
  * Map构造函数接收数组作为参事，实际执行了如下的算法
  * const item = [
      ['name', 'zs', 'www'],
      ['age', 18]
    ];
    const arr = new Map();

    items.forEach(([key, value]) => {
      arr.set(key ,value);
    })
  */
/*
  const arr = new Map([
    ['name', 'zs', 'www'],
    ['age', 18]
  ]);
  console.log(arr.size); //2
  console.log(arr.get('name')); //true
  console.log(arr.get('age')); // 18
  */
  