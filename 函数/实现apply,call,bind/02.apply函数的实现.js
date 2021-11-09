//apply函数的实现
Function.prototype.myApply = function(thisArg, pramsArray) {
   //获取要执行的函数
   let fn = this;
   //判断this是不是非对象类型或者undefined和null 在node环境下全局为global
   thisArg = ( this !== null && this !== undefined ) ? Object(thisArg) : typeof window === 'undefined' ? global : window;
   //把该函数加入该对象作为隐式绑定 绑定该函数的this为thisArg
   thisArg.fn = fn;
   //调用该函数  //防止原函数没有参数，导致展开undefined或者null出错，我们给其加了一个默认的值[]
   pramsArray = pramsArray || [];
   const res =  thisArg.fn(...pramsArray);
   //删掉thisArg的fn属性
   delete thisArg.fn;
   //返回调用结果
   return res;
}

function foo(num1, num2) {
   console.log('hello', num1 + num2);    
}

foo.myApply(null, [1, 2]);


function bar(){
    console.log('hello,我是没有参数', this)
}

bar.myApply(null);

bar.myApply('', [3,4]);