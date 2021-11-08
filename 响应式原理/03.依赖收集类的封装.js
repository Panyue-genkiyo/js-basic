class Depend{
   constructor(){
       this.reactiveFns = [];
   }
   addDepend(reactiveFn){
       this.reactiveFns.push(reactiveFn);
   }
   notify(){
       this.reactiveFns.forEach(reactiveFn=>{
           reactiveFn();
       })
   };
}

let depend = new Depend();


const obj = {
    name: 'xxx', //depend对象
    age:12 //depend对象
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
    depend.addDepend(fn);
}

depend.notify();