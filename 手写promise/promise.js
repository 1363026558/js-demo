const MyPromise = () => {
  // 定义变量
  const PENDING = 'pending';
  const RESOLVED = 'resolved';
  const REJECTED = 'rejected';
  const PromiseStatus = Symbol('PromiseStatus');
  const PromiseValue = Symbol('PromiseValue');
  return class {
    // 构造器
    constructor (executor) {
      // 初始化
      this[PromiseStatus] = PENDING;  // 当前状态
      this[PromiseValue] = undefined; // 当前值
      /*
        定义resolve函数
        @param{*}data：要饭获得数据
      */
     const resolve = (data) => {

     }
     /*
        定义reject函数
        @param{*}data：要饭获得数据
      */
     const reject = (data) => {

     }
     // 执行
     executor(resolve, reject);
    }

  }

}