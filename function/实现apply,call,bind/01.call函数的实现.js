Function.prototype.mycall = function(thisArg, ...args) {
    //在这里获取this指向的函数
     let fn = this;
     //转换this为一个正确的对象类型 防止其传入的是非对象类型 更要防止传入的this是不是undefined和null，如果是则把这个this绑定到window上
     thisArg = this ? Object(thisArg) : window; //number => Number / string => String / boolean => Boolean...
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


