Promise.resolve().then(() => {
    console.log(1); //微任务一
    //return 4; //如果这里是直接return 一个具体的值而不是thenable对象，直接加到下一个微任务队列
    
    //2.这里返回一个thenable对象
    //把执行then这个函数放置到了下一次的微任务中，而不是直接resolve(4);
    // return {
    //     then(resolve){
    //         resolve(4);//注意这里如果返回thenable对象，则不会直接把这个4直接加入下一个微任务队列，而是会等待这个thenable对象的then方法执行完毕，然后再加入下一个微任务队列.会推迟到下一次微任务队列
    //     }
    // }

    //3.如果这里返回一个promise则推迟到两次
    //首先你不是普通的值，往后推一次微任务
    //其次你又在promise.resolve(4),后面的then拿到4又会推迟到下一次微任务队列
    //不存在于promise a+规范中
    return Promise.resolve(4); 
}).then((res) => {
    console.log(res) //微任务三
});

Promise.resolve().then(() => {
    console.log(2); //微任务二
}).then(() => {
    console.log(3); //微任务四
}).then(() => { 
    console.log(5); //微任务五
}).then(() => {
    console.log(6); //微任务六
})

//直接返回普通的值
//1, 2, 4, 3, 5, 6

//thenable对象
//返回thenable就是推迟到下一次: 1,2,3,4,5,6
//本来你在这里按顺序讲说你应该是 1 then(resolve(4)) 2...但是他在这里给你往后推迟了一步等于说是 1 2 resolve(4) 3 所以也就是说变为1 2 3 4...

//返回promise对象:则推迟两次 1,2,3,5,4,6
// 本来是 1 promise.resolve(4) 2 => 1 2 3 then(res(4)) => 1 2 3 5 4 6