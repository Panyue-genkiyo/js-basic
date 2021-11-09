Function.prototype.mycall = function(thisArg, ...args) {
    //在这里获取this指向的函数
     let fn = this;
     //转换this为一个正确的对象类型 防止其传入的是非对象类型 更要防止传入的this是不是undefined和null，如果是则把这个this绑定到window上
     //这里不能直接写this ? Object(this): this的原因是，如果false,0这样不是null和undefined被当做this值的话，我们的this也会被绑定到window上，我们并不希望这样
     //在node环境下全局为global
     thisArg = ( this !== null && this !== undefined ) ? Object(thisArg) : typeof window === 'undefined' ? global : window; //number => Number / string => String / boolean => Boolean...
     thisArg.fn = fn;
     //调用该函数
     let res = thisArg.fn(...args); //又是隐式绑定 this === thisArg
     //删除该函数的引用
     delete thisArg.fn;
     //返回函数调用结果
     return res;
};

function foo(){
    console.log('foo函数被执行了', this);
}

//隐式绑定this === foo
foo.mycall({});

foo.mycall(false);


