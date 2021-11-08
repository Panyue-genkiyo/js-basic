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
    age:12, //depend对象
    salary:34,
};

//监听对象的属性变化 Proxy(vue3)/Object.defineProperty()(vue2)
const objProxy = new Proxy(obj,{
    get(target,key,receiver){
        return Reflect.get(target,key,receiver);
    },
    set(target,key,value,receiver){
        Reflect.set(target,key,value,receiver);
        depend.notify(); //通知所有的响应式函数重新执行
    }
});

//当obj.name变化，该匿名函数自动重新之执行
watchFn(function(){
    const newName = objProxy.name;
    console.log(`${newName} name发生变化!!`);
});


watchFn(function(){
    console.log(`${objProxy.age} age发生变化`);
});

watchFn(() => {
    console.log(`${objProxy.salary} salary发生变化`);
})

function bar(){
    console.log('普通的其他函数');
    console.log('这个函数不需要任何响应式');
}

//封装响应式
function watchFn(fn){
    depend.addDepend(fn);
}


objProxy.name = 'hello';