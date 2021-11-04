//定时器的任务编排

setTimeout(() => {
    console.log('timer 1'); //异步 不小于4ms 到4ms把这个任务丢到红宏任务队列中等待轮询
}, 2000);

setTimeout(() => {
    console.log('timer 2'); //异步 不小于4ms 到2s把这个任务丢到红宏任务队列中等待轮询 宏任务队列
}, 1000); 

console.log('hello test'); //同步 //主线程完成之后再轮询

//此时的顺序为 hello test --> timer 2 --> timer 1


