// const promise = new Promise((resolve, reject) => {
//     console.log(1);
//     resolve('success')
//     console.log(2);
//   });
//   promise.then(() => {
//     console.log(3);
//   });
//   console.log(4);


  //1 2 4 3

//   const promise = new Promise((resolve, reject) => {
//     console.log(1);
//     console.log(2);
//   });
//   promise.then(() => {
//     console.log(3);
//   });
//   console.log(4);

  // 1 2 4
  

//   const promise1 = new Promise((resolve, reject) => {
//     console.log('promise1')
//     resolve('resolve1')
//   })
//   const promise2 = promise1.then(res => {
//     console.log(res)
//   })
//   console.log('1', promise1);
//   console.log('2', promise2);
  

//promise1, 1 promise<fullfilled value:resolve1>,2 promise<pending>, resolve1


// const fn = () => (new Promise((resolve, reject) => {
//     console.log(1);
//     resolve('success')
//   }))
//   fn().then(res => {
//     console.log(res)
//   })
//   console.log('start')
  
//1 start success

// const fn = () =>
//   new Promise((resolve, reject) => {
//     console.log(1);
//     resolve("success");
//   });
// console.log("start");
// fn().then(res => {
//   console.log(res);
// });

//start 1 success

// console.log('start')
// setTimeout(() => {
//   console.log('time')
// })
// Promise.resolve().then(() => {
//   console.log('resolve')
// })
// console.log('end')

//start end resolve time

// const promise = new Promise((resolve, reject) => {
//     console.log(1);
//     setTimeout(() => {
//       console.log("timerStart");
//       resolve("success");
//       console.log("timerEnd");
//     }, 0);
//     console.log(2);
//   });
//   promise.then((res) => {
//     console.log(res);
//   });
//   console.log(4);
  
//1 2 4 timerStart timerEnd success

// setTimeout(() => {
//     console.log('timer1');
//     setTimeout(() => {
//       console.log('timer3')
//     }, 0)
//   }, 0)
//   setTimeout(() => {
//     console.log('timer2')
//   }, 0)
//   console.log('start')

  //start timer1 timer2 timer3

//   setTimeout(() => {
//     console.log('timer1');
//     Promise.resolve().then(() => {
//       console.log('promise')
//     })
//   }, 0)
//   setTimeout(() => {
//     console.log('timer2')
//   }, 0)
//   console.log('start')
  
 //start timer1 promise timer2    

//  Promise.resolve().then(() => {
//     console.log('promise1');
//     const timer2 = setTimeout(() => {
//       console.log('timer2')
//     }, 0)
//   });
//   const timer1 = setTimeout(() => {
//     console.log('timer1')
//     Promise.resolve().then(() => {
//       console.log('promise2')
//     })
//   }, 0)
//   console.log('start');
  
  //start promise1 timer1 promise2 timer2

//   const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('success')
//     }, 1000)
//   })
//   const promise2 = promise1.then(() => {
//     throw new Error('error!!!')
//   })
//   console.log('promise1', promise1)
//   console.log('promise2', promise2)
//   setTimeout(() => {
//     console.log('promise1', promise1)
//     console.log('promise2', promise2)
//   }, 2000)
  
 //promise1 promise2 Error 'error' promise1<'success'> promis2<'error!'>

//  const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("success");
//       console.log("timer1");
//     }, 1000);
//     console.log("promise1里的内容");
//   });
//   const promise2 = promise1.then(() => {
//     throw new Error("error!!!");
//   });
//   console.log("promise1", promise1);
//   console.log("promise2", promise2);
//   setTimeout(() => {
//     console.log("timer2");
//     console.log("promise1", promise1);
//     console.log("promise2", promise2);
//   }, 2000);

  //promise1的内容  promise1 pending promise2 pending timer1 Error 'error' timer2 promise1<'success'> promis2<'error!'>

 
//   const promise = new Promise((resolve, reject) => {
//     resolve("success1");
//     reject("error");
//     resolve("success2");
//   });
//   promise
//   .then(res => {
//       console.log("then: ", res);
//     }).catch(err => {
//       console.log("catch: ", err);
//     })
  
 // then success1

//  const promise = new Promise((resolve, reject) => {
//     reject("error");
//     resolve("success2");
//   });
//   promise
//   .then(res => {
//       console.log("then1: ", res);
//     }).then(res => {
//       console.log("then2: ", res);
//     }).catch(err => {
//       console.log("catch: ", err);
//       //默认的promise
//     }).then(res => {
//       console.log("then3: ", res);
//     })
  
// catch error then3:  undefined


// Promise.resolve(1)
//   .then(res => {
//     console.log(res);
//     return 2;
//   })
//   .catch(err => {
//     return 3;
//   })
//   .then(res => {
//     console.log(res);
//   });

// 1 2

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('timer')
//       resolve('success')
//     }, 1000)
//   })
//   const start = Date.now();
//   promise.then(res => {
//     console.log(res, Date.now() - start)
//   })
//   promise.then(res => {
//     console.log(res, Date.now() - start)
//   })
  
//同一个then
//timer 1001 1002

// Promise.resolve().then(() => {
//     return new Error('error!!!')
//   }).then(res => {
//     console.log("then: ", res)
//   }).catch(err => {
//     console.log("catch: ", err)
//   })
  
// then Error 'error'

// const promise = Promise.resolve().then(() => {
//     return promise; //死循环
//   })
//   promise.catch(console.err)


// Promise.resolve(1)
//   .then(2)
//   .then(Promise.resolve(3))
//   .then(console.log)

//1  .then 或者 .catch 的参数期望是函数，传入非函数则会发生值透传。

// Promise.reject('err!!!')
//   .then((res) => {
//     console.log('success', res)
//   }, (err) => {
//     console.log('error', err)
//   }).catch(err => {
//     console.log('catch', err)
//   })

//error err!

// Promise.resolve()
//   .then(function success (res) {
//     throw new Error('error!!!')
//   }, function fail1 (err) {
//     console.log('fail1', err)
//   }).catch(function fail2 (err) {
//     console.log('fail2', err)
//   });

//fail2 error!!! 

// Promise.resolve('1')
//   .then(res => {
//     console.log(res)
//   })
//   .finally(() => {
//     console.log('finally')
//   })
// Promise.resolve('2')
//   .finally(() => {
//     console.log('finally2')
//   	return '我是finally2返回的值' //这里返回的上一个promise的值也就是2
//   })
//   .then(res => {
//     console.log('finally2后面的then函数', res)
//   })
  
//1 finally2  finally  finally2后面的then函数 2
// Promise.resolve('1')
//   .finally(() => {
//     console.log('finally1')
//     throw new Error('我是finally中抛出的异常')
//     //如果这里是return的话， 这里就是finally的返回值就为1
//   })
//   .then(res => {
//     console.log('finally后面的then函数', res)
//   })
//   .catch(err => {
//     console.log('捕获错误', err)
//   });

 //finally1 捕获错误 Error: 我是finally中抛出的异常 

//  function promise1 () {
//     let p = new Promise((resolve) => {
//       console.log('promise1');
//       resolve('1')
//     })
//     return p;
//   }
//   function promise2 () {
//     return new Promise((resolve, reject) => {
//       reject('error')
//     })
//   }
//   promise1()
//     .then(res => console.log(res))
//     .catch(err => console.log(err))
//     .finally(() => console.log('finally1'))
  
//   promise2()
//     .then(res => console.log(res))
//     .catch(err => console.log(err))
//     .finally(() => console.log('finally2'))
  
//promise1 1 error finally1 finally2

// const p1 = new Promise(r => console.log('立即打印'));


//有了all，你就可以并行执行多个异步操作，并且在一个回调中处理所有的返回数据。
// function runAsync (x) {
//     const p = new Promise(r => setTimeout(() => r(x, console.log(x)), 1000))
//     return p
// }

// Promise.all([runAsync(1), runAsync(2), runAsync(3)])
//         .then(value => console.log(value)) //同时1，2，3 //async并行



        // function runAsync (x) {
        //     const p = new Promise(r => setTimeout(() => r(x, console.log(x)), 1000))
        //     return p
        //   }
        //   function runReject (x) {
        //     const p = new Promise((res, rej) => setTimeout(() => rej(`Error: ${x}`, console.log(x)), 1000 * x))
        //     return p
        //   }
        //   Promise.all([runAsync(1), runReject(4), runAsync(3), runReject(2)])
        //     .then(res => console.log(res))
        //     .catch(err => console.log(err))


 //1秒之后输出1，3   2 Error 2  4(注意catch会捕获最先的那个异常);，注意all中有一个发生错误不会进入then的第一个回调

//  function runAsync (x) {
//      //setTimeout宏任务
//     const p = new Promise(r => setTimeout(() => r(x, console.log(x)), 1000))
//     return p
//   }
//   Promise.race([runAsync(1), runAsync(2), runAsync(3)])
//     .then(res => console.log('result: ', res)) //微任务
//     .catch(err => console.log(err))

//1, result：1,2, 3

// function runAsync(x) {
//     const p = new Promise(r =>
//       setTimeout(() => r(x, console.log(x)), 1000)
//     );
//     return p;
//   }
//   function runReject(x) {
//     const p = new Promise((res, rej) =>
//       setTimeout(() => rej(`Error: ${x}`, console.log(x)), 1000 * x)
//     );
//     return p;
//   }
//   Promise.race([runReject(0), runAsync(1), runAsync(2), runAsync(3)])
//     .then(res => console.log("result: ", res))
//     .catch(err => console.log(err));

//0 Error:0 1 2 3  //谁先执行完就是谁的 


/**
 * Promise.all()的作用是接收一组异步任务，然后并行执行异步任务，并且在所有异步操作执行完后才执行回调。
.race()的作用也是接收一组异步任务，然后并行执行异步任务，只保留取第一个执行完成的异步操作的结果，其他的方法仍在执行，不过执行结果会被抛弃。
Promise.all().then()结果中数组的顺序和Promise.all()接收到的数组顺序一致。
all和race传入的数组中如果有会抛出异常的异步任务，那么只有最先抛出的错误会被捕获，并且是被then的第二个参数或者后面的catch捕获；但并不会影响数组中其它的异步任务的执行。
 */

// async function async1() {
//     console.log("async1 start");
//     await async2(); //阻塞之后的代码相当于之后的代码处在then中
//     console.log("async1 end");
//   }
//   async function async2() {
//     console.log("async2");
//   }
//   async1();
//   console.log('start')
  
 //async1 start -> async2 -> start -> async1 end

//  async function async1() {
//     console.log("async1 start");
//     new Promise(resolve => {
//       console.log('promise')
//     })
//     console.log("async1 end");
//   }
//   async1();
//   console.log("start")

// async function async1() {
//     console.log("async1 start");
//     await async2();
//     console.log("async1 end");
//   }
//   async function async2() {
//     setTimeout(() => {
//       console.log('timer')
//     }, 0)
//     console.log("async2");
//   }
//   async1();
//   console.log("start")

// async function async1() {
//     console.log("async1 start");
//     await async2();
//     console.log("async1 end");
//     setTimeout(() => {
//       console.log('timer1')
//     }, 0)
//   }
//   async function async2() {
//     setTimeout(() => {
//       console.log('timer2')
//     }, 0)
//     console.log("async2");
//   }
//   async1();
//   setTimeout(() => {
//     console.log('timer3')
//   }, 0)
//   console.log("start")
 
//async1 start => async2 => start => async1 end => timer2 => timer3 => timer1

// async function async1 () {
//     console.log('async1 start');
//     await new Promise(resolve => {
//       console.log('promise1') //同步代码 //之后卡住 
//     })
//     console.log('async1 success');
//     return 'async1 end'
//   }
//   console.log('srcipt start')
//   async1().then(res => console.log(res))
//   console.log('srcipt end')
  
// script start => promise => async1 start => script end 


// async function async1 () {
//     console.log('async1 start');
//     await new Promise(resolve => {
//       console.log('promise1')
//       resolve('promise1 resolve')
//     }).then(res => console.log(res))
//     console.log('async1 success');
//     return 'async1 end'
//   }
//   console.log('srcipt start')
//   async1().then(res => console.log(res))
//   console.log('srcipt end')
  
//srcipt start => async1 start => promise1 => script end => promise1 resolve => async1 success => async1 end


// async function async1 () {
//     console.log('async1 start');
//     await new Promise(resolve => {
//       console.log('promise1')
//       resolve('promise resolve')
//     })
//     console.log('async1 success');
//     return 'async1 end'
//   }
//   console.log('srcipt start')
//   async1().then(res => {
//     console.log(res)
//   })
//   new Promise(resolve => {
//     console.log('promise2')
//     setTimeout(() => {
//       console.log('timer')
//     })
//   })
  
//srcipt start => async1 start => promise1 => promise2 => async1 success => async1 end => timer

//头条面试题
// async function async1() {
//     console.log("async1 start");
//     await async2();
//     console.log("async1 end");
//   }
  
//   async function async2() {
//     console.log("async2");
//   }
  
//   console.log("script start");
  
//   setTimeout(function() {
//     console.log("setTimeout");
//   }, 0);
  
//   async1();
  
//   new Promise(function(resolve) {
//     console.log("promise1");
//     resolve();
//   }).then(function() {
//     console.log("promise2");
//   });
//   console.log('script end')

//script start =>  async1 start =>  async2 => promise1 => script end => async1 end => promise2 => setTimeout


// async function testSometing() {
//     console.log("执行testSometing");
//     return "testSometing";
//   }
  
//   async function testAsync() {
//     console.log("执行testAsync");
//     return Promise.resolve("hello async");
//   }
  
//   async function test() {
//     console.log("test start...");
//     const v1 = await testSometing();
//     console.log(v1);
//     const v2 = await testAsync();
//     console.log(v2);
//     console.log(v1, v2);
//   }
  
//   test();
  
//   var promise = new Promise(resolve => {
//     console.log("promise start...");
//     resolve("promise");
//   });
//   promise.then(val => console.log(val));
  
//   console.log("test end...");

// test start... -> 执行testSometing -> promise start... -> test end... -> testSometing -> 执行testAsync -> promise -> hello async -> testSometing hello async


// async function async1 () {
//     //这里要记得处理错误 
//     //如果在async函数中抛出了错误，则终止错误结果，不会继续向下执行。
//     await async2();
//     console.log('async1');
//     return 'async1 success'
//   }
// async function async2 () {
//     return new Promise((resolve, reject) => {
//       console.log('async2')
//       reject('error')
//     })
// }
// async1().then(res => console.log(res))
  
//async2 => uncaught error

// async function async1 () {
//     console.log('async1');
//     throw new Error('error!!!'); 
//     //下面一行不会执行
//     return 'async1 success'
//   }
// async1().then(res => console.log(res))



// async function async1 () {
//     try {
//       await Promise.reject('error!!!')
//     } catch(e) {
//       console.log(e)
//     }
//     console.log('async1');
//     return Promise.resolve('async1 success')
//   }
//   async1().then(res => console.log(res))
//   console.log('script start')
  
  // script start -> Error:error!!! -> async1 -> async1 success;

  //同理
//   async function async1 () {
//     // try {
//     //   await Promise.reject('error!!!')
//     // } catch(e) {
//     //   console.log(e)
//     // }
//     await Promise.reject('error!!!')
//       .catch(e => console.log(e))
//     console.log('async1');
//     return Promise.resolve('async1 success')
//   }
//   async1().then(res => console.log(res))
//   console.log('script start')



//综合题
// const first = () => (new Promise((resolve, reject) => {
//     console.log(3);
//     let p = new Promise((resolve, reject) => {
//         console.log(7);
//         setTimeout(() => {
//             console.log(5);
//             resolve(6); //宏任务来不及改了
//             console.log(p)
//         }, 0)
//         resolve(1);//内层promise
//     });
//     resolve(2); //外层promise
//     p.then((arg) => {
//         console.log(arg);
//     });
// }));
// first().then((arg) => {
//     console.log(arg);
// });
// console.log(4);

//3 => 7 => 4 => 1 => 2 => 5 => promise<1>;

// const async1 = async () => {
//     console.log('async1');
//     setTimeout(() => {
//       console.log('timer1')
//     }, 2000)
//     await new Promise(resolve => {
//       console.log('promise1')
//     })
//     console.log('async1 end')
//     return 'async1 success'
//   } 
//   console.log('script start');
//   async1().then(res => console.log(res));
//   console.log('script end');
//   Promise.resolve(1)
//     .then(2)
//     .then(Promise.resolve(3))
//     .catch(4)
//     .then(res => console.log(res))
//   setTimeout(() => {
//     console.log('timer2')
//   }, 1000)

  //script start -> async1 -> promise1 -> script end -> 1 -> timer2 -> timer1

//   const p1 = new Promise((resolve) => {
//     setTimeout(() => {
//       resolve('resolve3');
//       console.log('timer1')
//     }, 0)
//     resolve('resovle1');
//     resolve('resolve2');
//   }).then(res => {
//     console.log(res)
//     setTimeout(() => {
//       //最后执行这里的p1打印的finally的返回值,因为他是最后一个宏任务在微任务.finally之后执行
//       console.log(p1)
//     }, 1000)
//   }).finally(res => {
//     //finally 不管reject还是resolve都会执行,但它的回调函数是接收不到Promise的结果的 res === undefined
//     //我们知道.finally的返回值如果在没有抛出错误的情况下默认会是上一个Promise的返回值
//     //上一个then没有返回值,所以这里.finally的返回值为undefined
//     console.log('finally', res)
//   })

//resolve1 => finally undefined => timer1 => promise<'undefined'>

  //每隔一秒输出1，2，3
 
//   [1,2,3].reduce((p, cur) => {
//       //每一步返回promise
//       return p.then(() => {
//           return new Promise((resolve, _) =>{
//               setTimeout(() => {
//                   resolve(console.log(cur));
//               },1000);
//           })
//       })
//   },Promise.resolve());

//链式调用 下一then微任务等待上一个微任务then
//  Promise.resolve()
//         .then(() => {
//             return new Promise((resolve, _) =>{
//                 setTimeout(() => {
//                     resolve(console.log(1));
//                 }, 1000);
//             })
//         })
//         .then(() => {
//             return new Promise((resolve, _) =>{
//                 setTimeout(() => {
//                     resolve(console.log(2));
//                 }, 1000);
//             })
//         })


// const arr = [1, 2, 3];
// const result = arr.reduce((p, x) => {
//     //这里不返回promise了会出现问题，此时then中的方法变为同步代码，三个定时器几乎同时开始，所以结果就是1，2，3一瞬间都打印出来
//    return p.then(new Promise(r => {
//         //而是在一瞬间1，2，3都打印出来
//         setTimeout(() => r(console.log(x)), 1000);
//      }))
// }, Promise.resolve());

// Promise.resolve()
//        .then(1)
//        .then(4)
//        .then(3)
//        .then(res => {
//            console.log(res);//undefined 值穿透 但是then里面的代码还是会执行，此时then中的方法相当于同步代码
//        }).then(console.log('test')); //因为then这里变为同步代码 主线程 所以先打印test然后再打印res的值 为undefined注意

//红绿灯案例
// function red() {
//     console.log('red');
// }
// function green() {
//     console.log('green');
// }
// function yellow() {
//     console.log('yellow');
// }

// const light = (timer, cb) => {
//     //红灯每3秒亮 绿灯每2秒亮 黄灯每1秒亮 三个灯不断交替重复亮灯
//     return new Promise((resolve, reject) => {
//         setTimeout(() =>{
//             cb();
//             resolve();
//         }, timer);
//     })
// }

// function step(){
//     Promise.resolve()
//            .then(() => light(3000,red))
//            .then(() => light(2000,green))
//            .then(() => light(1000,yellow))
//            .then(() => step());
// }

// step();

//实现mergePromise函数，把传进去的数组按顺序先后执行，并且把返回的数据先后放到数组data中。

// const time = (timer) => {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve()
//       }, timer)
//     })
//   }
//   const ajax1 = () => time(2000).then(() => {
//     console.log(1);
//     return 1
//   })
//   const ajax2 = () => time(1000).then(() => {
//     console.log(2);
//     return 2
//   })
//   const ajax3 = () => time(1000).then(() => {
//     console.log(3);
//     return 3
//   })
  
//   function mergePromise (ajaxArr) {
//     // 在这里写代码 
//     let data = [];
//     let promise = Promise.resolve();
//     ajaxArr.forEach(ajax => {
//         //第一次then是调用ajax该函数，第二次ajax是拿到这个ajax给我们resolve的值
//         promise = promise.then(ajax).then(value => {
//             data.push(value);
//             return data; //保存data到promise上
//         })
//     });
//     return promise;
//   }
  
//   mergePromise([ajax1, ajax2, ajax3]).then(data => {
//     console.log("done");
//     console.log(data); // data 为 [1, 2, 3]
//   });

//异步加载图片方法

// function loadImage(src){
//     return new Promise((resolve, reject) => {
//        let image = new Image();
//        image.onload = function(){
//            resolve(image);
//        }
//        image.onerror = function(){ 
//            //reject(new Error(`couldn't find a picture width this url: ${url}`)); //注意这里不能抛出错误，因为这是异步在回调函数中抛出的错误不能被外界catch到
//            throw new Error(`couldn't find a picture width this url: ${url}`);
//         }
//         image.src = src;
//     });
// }
  

// loadImage('http://localshost:5003/res=123');

