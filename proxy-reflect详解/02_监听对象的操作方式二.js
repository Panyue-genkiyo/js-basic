//proxy

const obj = {
    name: 'py', 
    age:18
}

//参数：目标对象(你要代理哪一个)，拦截器对象(3中方式)
const objProxy = new Proxy(obj,{
    //获取值时的捕获器
    //目标对象,目标key
    get(target,key){
        console.log('get:',key)
        return target[key]
    },
    //设置值时的捕获器
    //目标对象,目标key,修改之后的newValue
    set(target,key,newValue){
        console.log('set:',key, newValue)
        target[key] = newValue;
    }
});

//可以监听
console.log(objProxy.name); //py
console.log(objProxy.age); //18

//通过修改代理对象，检查是否对原有对象产生影响,原有对象也会被改变
objProxy.name = 'py2';
objProxy.age = 20;

// console.log(obj.name);
// console.log(obj.age); //ok 原有对象也被改掉了
