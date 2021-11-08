let activeReactiveFn = null; //代表当前在watchFn中需要被收集的响应式函数


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

//封装一个函数reactive，es6之前将传入的对象变为响应式的对象 Object.defineProperty
function reactive(obj){
    Object.keys(obj).forEach(key => {
         let value =obj[key];
         Object.defineProperty(obj, key, {
            get(){
              const depend = getDepend(obj, key);
              depend.depend();  
              return value;  
            },
            set(newValue){
                value = newValue;
                const depend = getDepend(obj, key);
                depend.notify();
            }
       }) 
   });
   return obj;
}

 
let depend = new Depend();

 
 //监听对象的属性变化 Proxy(vue3)/Object.defineProperty()(vue2)
 let obj = reactive({
    name: 'xxx', //depend对象
    age:12, //depend对象
    salary:34,
});
 
 let info = reactive({
    address: 'shanghai'
});
 
 //依赖 obj.name
 watchFn(function(){
     const newName = obj.name;
     console.log(`${newName} name发生变化!!`);
 });
 
 //依赖 obj.age, obj.name
 watchFn(function(){
     console.log(`${obj.age} age发生变化`);
     console.log(`${obj.name} name发生变化`)
 });
 
 //依赖 obj.salary
 watchFn(() => {
     console.log(`${obj.salary} salary发生变化`);
     console.log(`${obj.salary} salary多次被使用`)
 })
 
 function bar(){
     console.log('普通的其他函数');
     console.log('这个函数不需要任何响应式');
 }
 

 //依赖 info.address
 watchFn(() => {
     console.log(`${info.address}, address！！`)
 })

//  obj.name = 'hello';
console.log('===========改变obj.name=========')
//测试改变obj.name的值，检测依赖它的函数是否会重新调用
obj.name = 'py';
console.log('==========改变obj.salary========');
obj.salary = 35;

console.log('==========改变info.address========');
info.address = 'beijing';