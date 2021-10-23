/*函数参数和arguments*/

//函数也可以作为参数传递
function hd(a){
    return a <= 3;
}

let arr = [1,2,3,4,5,6,7].filter(hd);
console.log(arr);

//定时器
let i = 1;

function cms(){
    console.log(++i);
}

//回调函数
//闭包
// setInterval(cms, 1000)

//arguments 历史上存在的特性
function sum(){

    //es6可以直接采用剩余参数 (...rest) => {} rest就是真正的数组

    // let res = 0;
    //函数里面默认维护一个arguments属性:类数组 不是数组,类数组
    // console.log(arguments.length) //{'0': 1, '1':2 ...} 有索引有length
    // for(let v of arguments){
    //     sum += v;
    // }
    // return v;

    //或者直接借用数组的方法
    // return Array.from(arguments).reduce((sum, cur) => sum + cur);
    ///转换为数组
    return [...arguments].reduce((sum, cur) => sum + cur);
}



console.log(sum(1,2,3,5,56))