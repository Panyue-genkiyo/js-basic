let activeReactiveFn = null; //代表当前在watchFn中需要被收集的响应式函数

/**
 * 类Depend优化:
 *    1.一个更简单依赖收集类api depend方法，使得代理对象的get捕获器可以不直接与activeReactiveFn打交道
 *    2.使用set来保存依赖函数，而不是数组，防止重复添加依赖
 */

class Depend{
    constructor(){
        //这里用set的原因是因为set是唯一的，防止你在一个watcher中添加了多个相同的响应函数
        this.reactiveFns = new Set();
    }
    
    // addDepend(reactiveFn){
    //     this.reactiveFns.add(reactiveFn);
    // }

    depend(){
        if(activeReactiveFn){
            this.reactiveFns.add(activeReactiveFn);
        }
    }

    notify(){
        this.reactiveFns.forEach(reactiveFn=>{
            reactiveFn();
        })
    };
 }

const targetMap = new WeakMap(); //最外层的map对象


//封装响应式函数
function watchFn(fn){
    // depend.addDepend(fn);
    //将这个函数放入到争取的依赖里面
    activeReactiveFn = fn;
    fn(); //执行该函数的时候就会去执行代理对象的get方法，去收集你这个函数所依赖的对象的值
    activeReactiveFn = null;
}

//封装一个获取depend的函数
function getDepend(target, key){
    //是根据target对象来获取map的过程
    let map = targetMap.get(target);
    if(!map){
        map = new Map();
        targetMap.set(target, map);
    }
    //根据key来获取depend对象
    let depend = map.get(key);
    //同样可能这个depend也是不存在的
    if(!depend){
        depend = new Depend();
        map.set(key, depend);
    }
    return depend;
}

 
let depend = new Depend();
 
const obj = {
     name: 'xxx', //depend对象
     age:12, //depend对象
     salary:34,
};
 
 const info = {
     address: 'shanghai'
 }
 
 //监听对象的属性变化 Proxy(vue3)/Object.defineProperty()(vue2)
 const objProxy = new Proxy(obj,{
     get(target,key,receiver){
         //根据target和key来获取depend对象
         const depend = getDepend(target, key);
         //给depend添加依赖的函数
         depend.depend();
         return Reflect.get(target,key,receiver);
     },
     set(target,key,value,receiver){
         Reflect.set(target,key,value,receiver);
         //depend.notify(); //通知所有的响应式函数重新执行
         let depend = getDepend(target, key);
         depend.notify();
     }
 });
 
 //依赖 obj.name
 watchFn(function(){
     const newName = objProxy.name;
     console.log(`${newName} name发生变化!!`);
 });
 
 //依赖 obj.age, obj.name
 watchFn(function(){
     console.log(`${objProxy.age} age发生变化`);
     console.log(`${objProxy.name} name发生变化`)
 });
 
 //依赖 obj.salary
 watchFn(() => {
     console.log(`${objProxy.salary} salary发生变化`);
     console.log(`${objProxy.salary} salary多次被使用`)
 })
 
 function bar(){
     console.log('普通的其他函数');
     console.log('这个函数不需要任何响应式');
 }
 

//  objProxy.name = 'hello';
console.log('===========改变obj.name=========')
//测试改变objProxy.name的值，检测依赖它的函数是否会重新调用
objProxy.name = 'py';
console.log('==========改变obj.salary========')
objProxy.salary = 35;
