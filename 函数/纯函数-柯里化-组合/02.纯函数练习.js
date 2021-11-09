// 为什么纯函数在函数式编程中非常重要呢？
//     1.因为你可以安心的编写和安心的使用；
//     2.你在用的时候保证了函数的纯度，只是单纯实现自己的业务逻辑即可，不需要关心传入的内容是如何获得的或
//      者依赖其他的外部变量是否已经发生了修改；
//     3，你在用的时候，你确定你的输入内容不会被任意篡改，并旦自己确定的输入，一定会有确定的输出；
//       React中就要求我们无论是函数还是class声明一个组件，这个组件都心须像纯函数一样，保护它们的props不被修
//    改


//纯函数 相同的输入一定相同的输出，不产生副作用
function foo(n1,n2){
    return n1 * 2 + n1 * n2;
}


let name = 'abc'
//不是纯函数，会产生副作用(修改了外界全局变量导致其它函数在用这个变量的时候会受到影响)
function bar(){
    console.log('bar函数主干代码执行....');
    name = 'cba';
}


//不是纯函数,试图修改参数(副作用);
function baz(info){
     info.age = 100;
}

let obj = {
    name: 'hello',
    age:18
}
baz(obj);
console.log(obj); //boom!!!已被修改


//是纯函数，没有修改外界全局变量也没有修改参数.
function test(info){
    //并没有修改info
    return {
        ...info,
        age: 100
    }
}
test(obj);
test(obj); //相同的输入一定会对应这相同的结构的输出

//举例react中的函数组件 要求是纯函数
function HelloWorld(props){
    ///不要试图在这里去修改props，很容易出现bug
    return <div>HelloWorld,{props.name}</div>
}

<HelloWorld name="hello"/>

let foo = 5;
//非纯函数 相同的输入不对应相同的输出，当外层全局变量变化则会导致内层函数的结果变化，即使是同样的输入
function add(num){
    return foo + num;
}
console.log(add(5));
foo = 4;
console.log(add(5));


function printInfo(info){
   console.log(info.name, info.age); //严格意义上来说不是纯函数，因为这里多了不必要的输出，但是我们可以忽略它，认为它是纯函数，因为这个输出不会产生额外严重的副作用
}