function composeFn(...fns){
   //组合函数的调用
   fns.every(fn => {
       if(typeof fn !== 'function'){
           throw new TypeError('参数必须是函数');
       }
       return true;
   });

   return function compose(...args){
      let index = 0;
      let res = fns.length ? fns[index].apply(this, args) : args;
      while(++index < fns.length){
          //当第一次的函数调用的结果传递到下一次函数调用的
         res = fns[index].call(this, res);
      }
      return res;
   }
}

function double(num){
    return num * 2;
}

function square(num){
    return num ** 2;
}

function add(num){
    return num + 2;
}

let fn = composeFn(double, square, add);
console.log(fn(2)); //2*2 4 => 4**2 => 16 => 16 + 2 => 18