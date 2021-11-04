/*宏任务与微任务*/

setTimeout(function() {
    console.log(1); //后
}) //宏任务

Promise.resolve().then(_ => console.log('promise')); //微任务 境紧接之后执行

console.log(2); //同步代码 先
//2 --> promise --> 1

// function  loadImage() {
    
// }