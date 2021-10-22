"use strict"
//使用代理控制函数
function factorial(num){
    return num === 1 ? 1 : num * factorial(num - 1); //递归
}

let proxy = new Proxy(factorial, {
    //func原函数，obj上下文对象，args参数列表[] .apply
    apply(func, obj, args){
        console.time('run');
        // console.log(func, obj, args);
        const fc = func.apply(obj, args);
        // console.log(fc);
        console.timeEnd('run');
    
    }
});

// proxy.apply({ hello: 'hello' }, [5]);

proxy.apply({}, [5]);