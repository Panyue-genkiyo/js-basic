//生成器函数的其他方法

function *foo(num){
    
    console.log('函数开始执行');
    
    const v1 = 1 * num;
    console.log('第一段代码执行');
    const n = yield v1;

    const v2 = 2 * n;
    console.log('第二段代码执行');
    const m = yield v2;

    const v3 = 3 * m;
    console.log('第三段代码执行');
    yield v3;

    const v4 = 4;
    console.log('第四段代码执行');
    yield v4;

}

//生成器next方法是可以传递参数的
const generator = foo(5);
console.log(generator.next()); //第一次是不会给next传递参数的，因为还没有遇到yield需要暂停 {value:5,done:false}

//第二段代码传递参数(第二次调用next的时候)
console.log(generator.next(2)); //第二次的next()传递的参数的作为第一次yield的返回值，注意 {value:4,done:false}
//第三段代码执行
console.log(generator.next(3)); //{{value:9, done:false} }} //同上

