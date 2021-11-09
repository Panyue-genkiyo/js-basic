//实现柯里化函数 将传入的函数自动转化为柯里化函数

function currying(fn){
    //返回柯里化之后的函数
    return function curried(...args){
        //判断已经接受到参数的个数是否等于函数的参数个数
        //如果大于或等于原来函数接受的参数的个数，则直接执行函数
        //这里需要绑定this，因为也有可能外界参数拿这个返回的函数去显示绑定this来调用(apply,call);
        if(args.length >= fn.length) return fn.call(this, ...args);
        else{
            //没有达到个数时,需要返回一个新的函数，继续来接受参数
            return function(...args2){
                //递归
                return curried.call(this, ...args, ...args2);
            }
        }
    }
}

//测试
function add(a, b, c){
    return a + b + c;
}

let current = currying(add);

console.log(current(1)(2)(3));
console.log(current(1,3)(4));
