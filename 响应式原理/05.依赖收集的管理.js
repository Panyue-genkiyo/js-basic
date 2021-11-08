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

const targetMap = new WeakMap(); //最外层的map对象

//封装响应式函数
function watchFn(fn){
    depend.addDepend(fn);
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
         return Reflect.get(target,key,receiver);
     },
     set(target,key,value,receiver){
         Reflect.set(target,key,value,receiver);
         //depend.notify(); //通知所有的响应式函数重新执行
         let depend = getDepend(target, key);
         depend.notify();
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
 
 //封装响应式函数
 function watchFn(fn){
     depend.addDepend(fn);
 }

  
 objProxy.name = 'hello';

 //obj对象  name:depend, age:depend, salary:depend
//  const objMap = new Map();
//  objMap.set('name',"nameDepend");
//  objMap.set('age',"ageDepend");
//  objMap.set('salary',"salaryDepend");

//  //获取obj属性name的depend对象
//  const nameDepend = objMap.get('name');
// //info对象  address:depend
//  const infoMap = new Map();
//  infoMap.set('address',"addressDepend");
 
//  //用weakMap存储objMap和infoMap
//  const targetMap = new WeakMap();
//  targetMap.set(obj,objMap);
//  targetMap.set(info,infoMap);

//  //比如当obj.name发生变化的时候，找到obj.name所对应的依赖
//  const nameDepend = targetMap.get(obj).get('name');
//  nameDepend.notify();
