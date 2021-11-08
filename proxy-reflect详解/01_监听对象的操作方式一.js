const obj = {
    name: 'py', 
    age: 21
};

//监听单个属性
// Object.defineProperty(obj, 'name', {
//     get(){
//         console.log('监听到obj的name属性被访问到了');
//     },
//     set(){
//         console.log('监听到obj的name属性被设置了');
//     }
// })

///监听所有属性
Object.keys(obj).forEach(key => {
    // console.log(key);
    let value = obj[key]; //闭包
    Object.defineProperty(obj, key, {
        get(){
            console.log(`监听到obj的${key}属性被访问到了`);
            // console.log(this === obj); //true
            // console.log(obj[key]); 在getter里面呢又调用getter，死循环栈溢出
            return value;
        },
        set(newValue){
            console.log(`监听到obj的${key}属性被设置了`);
            value = newValue;
        }
    })
})

//监听对对象属性的操作 包括获取值 修改值 删除等等....

// console.log(obj.name);
// obj.name = 'test';

// console.log(obj.age);

//object.defineProperty(obj,key,{})的设计初衷起始一开始并不是为了监听对象的属性的操作，而是为了给属性绑定访问修饰符(enumerable, configurable...)。
//但是新增属性和删除属性object.defineProperty()方法都不会触发监听器 无能为力的！记住！！！
//且object.defineProperty直接修改了原来的对象。不同于proxy代理。
//下面的无法监听
obj.a = 1;
delete obj.a;
