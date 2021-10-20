"use strict"
const user = {
    name: 'panyue',
    age: 23
}
//属性的特征 value, writeable enumerable configurable
// console.log(Object.getOwnPropertyDescriptor(user, 'name'));
// console.log(Object.getOwnPropertyDescriptors(user));


//更改对象的属性
Object.defineProperty(user, 'name', {
    value: 'py',
    writable: false, //不可重写
    enumerable: true, //不可遍历,
    configurable:false //是否可删除,且这种配置是单一的，不能再重复配置
});
//因为你上面定义了configurable:false,所以你在这里是无法重新定义user.name
// Object.defineProperty(user, 'name',{
//     writable: true
// })

// user.name = 'deede';

console.log(Object.keys(user));
console.log(user);
// delete user.name;
console.log(user); //configurable: true

//不允许遍历在for in里也无法看到
// for(let k in user){
//     console.log(`k:${k}, v:${user[k]}`);
// }

const obj = {
    a:1,
    b:2,
    c:3
}

//有多个属性可以批量进行设置
Object.defineProperties(obj,{
    a: {
        writable: true,
        enumerable: false,
    },
    b:{
       configurable:false     
    }
});
// delete obj.b
// console.log(obj);