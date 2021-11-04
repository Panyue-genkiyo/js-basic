//promise处理微任务

setTimeout(function() {
    console.log('定时器'); //宏任务
    new Promise(resolve => {
        console.log('setTimeout promise'); //同步
        resolve(); 
    }).then(_ => {
       console.log('setTimeout promise then'); //微任务
    });
    setTimeout(() => {
        console.log('setTimeout setTimeout'); //宏
    })
}, 0);

new Promise(resolve => {
    console.log('promise');//同步
    resolve('success');
}).then(v => {
    console.log(v); //当状态被resolve或者reject的时候，把then中方法放入微任务队列
});

console.log('xxxx');

//顺序 promise -> xxxx -> success -> 定时器 -> setTimeout promise -> setTimeout promise then -> setTimeout setTimeout

