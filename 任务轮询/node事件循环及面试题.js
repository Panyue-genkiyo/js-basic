/**
 * 所以，在每一次事件循环的tick中，会按照如下顺序来执行代码
   next tick microtask queue ;
   other microtask queue ;
   timer queue ;
   poll queue ;
   check queue ;
   close queue :
   
   我们会发现从一次事件循环的Tick来说，Node的事件循环更复杂，它也分为微任务和宏任务
   宏任务(macrotask )：setTimeout、setInterval、IO事件、setImmediate、close事件；
   微任务 (microtask）：Promise的then回调、，process.nextTick queueMicrotask:
但是，Node中的事件循环不只是 微任务队列和 宏任务队列：
   微任务队列
   next tick queue: process.nextTick
   other queue : Promise的then回调. queueMicrotask;
   宏任务队列：
   timer queue : setTimeout, setinterval:
   poll queue :I0事件；
   check queue : setImmediate;
   close queue : close事件
 */

async function async1(){
    console.log('async1 start')
    await async2();
    console.log('async1 end');
}

async function async2(){
    console.log('async2')
}

console.log('script start');

setTimeout(() => {
    console.log('setTimeout 0');
},0);

setTimeout(() => {
    console.log('setTimeout 2');
}, 300);

setImmediate(() => {
    console.log('setImmediate');
});

process.nextTick(() => {
    console.log('nextTick1');
});

async1();

process.nextTick(() => {
    console.log('nextTick2');
});

new Promise((resolve) =>{
    console.log('promise1');
    resolve();
    console.log('promise2');
}).then(() => {
    console.log('promise3');
});

console.log('script end');


//script start -> async1 start ->  async2 -> promise1 -> promise2 -> script end -> nextTick1 -> nextTick2 -> async1 end -> promise3 -> setTimeout 0 -> setImmediate -> setTimeout 2