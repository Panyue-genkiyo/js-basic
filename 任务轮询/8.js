//promise微任务处理复杂业务逻辑

// function sum(num){
//     return new Promise(function(resolve, reject){
//         setTimeout(() => {
//             let count = 0;
//             for(let i = 0; i < num; i++){
//                 count += num--;
//             }
//             resolve(count);
//         });
//     })
// }

async function hd(num){
    let res = await Promise.resolve().then(_ => {
       //使用promise微任务防止阻塞后续同步代码
       let count = 0;
       for(let i = 0; i < num; i++){
            count += num--;
       }
       return count; //相当于return Promise.resolve(count);
    })
    console.log(res); 
}

let num = 987654321;

hd(num);

// sum(num).then(value => console.log(value));

console.log('py test'); //此时因为复杂的计算处在微任务中，所以会先执行后续代码，然后再执行then中的回调函数，使得主线程的同步代码不会被阻塞