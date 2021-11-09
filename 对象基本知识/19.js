"use strict";
//访问器只是对单个属性进行限制，而代理 prox对象进行代理
const py = {name: 'py'};

const proxy = new Proxy(py, {
    get(target, propertyName){
        // console.log(propertyName);
        return target[propertyName]
    },
    set(target, propertyName, value){
        target[propertyName] = value;
        return true;
    }
});

//代理中介
// console.log(proxy.name); ///代理
proxy.name = 'panyue';
console.log(py.name);
console.log(proxy);