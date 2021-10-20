//封闭对象 无法改无法配置无法添加属性

"use strict";
const user = {
    name: 'panyue',
    age: 23
}

Object.seal(user); //封闭该对象
console.log(Object.isSealed(user)); //返回对象是否处于封闭状态
console.log(Object.getOwnPropertyDescriptors(user));

// user.site = 'www.panyue.com'; 无法扩展

// delete user.name; //也无法删除属性,在严格模式下会报错

// Object.defineProperty(user, 'name', {
//     writable: false,
// }); 也无法对属性进行重新配置

if(!Object.isSealed(user)){
    delete user.name
}

console.log(user);