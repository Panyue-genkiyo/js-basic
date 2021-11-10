//生成器的return方法
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

const generator = foo(10);
console.log(generator.next()); //{value: 10, done: false}

///第二段代码的执行
//提前终止生成器函数
//{ value: 20, done:true }
console.log(generator.return(20)); //注意这里第二代码是不会执行的，因为return方法终止了函数的执行，拿到的返回值是你return方法传递给它，作为上一次yield的返回值，然后再将其return出来
console.log(generator.next()); //{ value: undefined, done: true } //之后不管你再调用多少次next方法都不会再执行