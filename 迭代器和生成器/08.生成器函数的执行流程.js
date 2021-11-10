function *foo(){
    console.log('函数开始执行');
    // return; //done变为true 后面代码片段都不再执行
    yield 1; //yield 后面的可以是一个函数或者表达式
    console.log('函数执行结束');
    return 2; //Return为特殊的yard
}

const generator = foo();
console.log(generator.next()); //{value: 1,done: false}
console.log(generator.next()); //{value:2,done: true}




