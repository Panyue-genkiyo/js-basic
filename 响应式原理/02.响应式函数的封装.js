let reactiveFns = []; //存放需要添加响应式的函数
const obj = {
    name: 'xxx',
    age:12
};

//当obj.name变化，foo函数自动重新之执行
watchFn(function foo(){
    const newName = obj.name;
    console.log(newName);
});

function bar(){
    console.log('普通的其他函数');
    console.log('这个函数不需要任何响应式');
}

//封装响应式
function watchFn(fn){
    reactiveFns.push(fn);
}

reactiveFns.forEach(fn => fn());