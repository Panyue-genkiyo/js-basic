//封装网络请求
function requestData(url,){
    return new Promise((resolve,reject) => {
        //模拟网络请求
        setTimeout(() => {
            resolve(url);
        },500)
    });
}

//注意此时改需求 1.url:why -> res:why 2 url: res+'ddd' -> res:whyddd    
//第一种方案发送请求 链式then的链式调用
// requestData('py').then(res => requestData(res+'ddd'))
//                  .then(res => console.log(res))
//                  .catch(err => console.log(err)); 

//第三种实现方案 promise+generator生成器方案(推荐)
function* genData(){
    //让异步看起来更像同步
   const res1 = yield requestData('py'); //第一的next停到第一个yield处 //注意这里返回值是一个promise
   const res2 = yield requestData(res1+'aaa'); //第二个next停到第二个yield处
   const res3 = yield requestData(res2+'ccc'); //第三个next停到第三个yield处
   console.log(res3);
}

// const generator = genData();
// generator.next().value.then(res => {
//     generator.next(res).value.then(res => {
//         generator.next(res).value.then(res =>{
//            generator.next(res);
//         })
//     })
// })

//封装自动化函数开启生成器
// function execGenerator(generatorFn){
//     const generator = generatorFn();
//     function exec(res){
//        const result = generator.next(res);
//        if(result.done) return result.value;
//        //递归
//        result.value.then(res => exec(res));
//     }
//     exec()
// }


//用第三方包来实现自动开启生成器 co
const co = require('co');

co(genData); //效果等同于我们自己写的execGenerator函数
 
// execGenerator(genData);

//第四种方案 async await(ES8) promise then链式调用的语法糖
async function genData(){
    const res1 = await requestData('py'); 
    const res2 = await requestData(res1+'aaa'); 
    const res3 = await requestData(res2+'ccc');
    console.log(res3);
}

genData();


