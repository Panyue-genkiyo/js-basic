/**
 * 生成器是ES6中新增的一种函数控制、使用的方案，它可以让我们更加灵活的控制函数什么时候继续执行、暂停执行等。
 * 
 * 生成器西数也是一个西数，但是和普通的函数有一些区别：
   首先，生成器函数需要在function的后面加一个符号：*
   其次，生成器函数可以通过yield关键宁来控制函数的执行流程
   最后，生成器函数的返回值是一个Generator （ 生成器）生成器事实上是一种特殊的迭代器；
/ MDN : Instead, they return a special type of iterator, called a Generator.
 * 
 */


function* foo(){
    console.log('函数开始执行');
    yield;
    console.log('函数执行结束');
}

//开始调用foo生成器函数的时候 一行代码都不会给你执行的
const generator = foo(); //调用生成器函数时会给我们返回一个生成器对象 (生成器对象是一种特殊的迭代器)

//开始执行第一段代码(第一个yield之前的代码)
generator.next(); 
//第二段的代码
generator.next();


