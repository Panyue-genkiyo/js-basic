//
// function log(date, type, msg){
//     console.log(`[${date.getHours()}: ${date.getMinutes()}: ${date.getSeconds()}][${type}]:[${msg}]`);
// }

//没有必要每次都传入new Date().过于重复可以使用柯里化加闭包来改进
//柯里化的优化来"定制"我们的函数

const log = date => type => msg =>{
    console.log(`[${date.getHours()}: ${date.getMinutes()}: ${date.getSeconds()}][${type}]:[${msg}]`)
}

let nowLog = log(new Date()); //固定当前时间
nowLog('DEBUG')('轮播图的问题');
nowLog('INFO')('添加新功能');
//继续定制 复用上层函数逻辑 柯里化的好处
let nowLogAndDebug = nowLog('DEBUG');
nowLogAndDebug('hello组件出问题');
nowLogAndDebug('tes组件出问题');

// log(new Date(), 'INFO', 'Hello World');


