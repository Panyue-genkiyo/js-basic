"use strict";

const user = {
    name: 'panyue',
    age: 13
};

// Object.preventExtensions(user); //添加这个修饰之后就不能向对象添加属性了

// user.site = 'hello'; error: user cannot be extended;
//所以在这里最好判断一下它能不能扩展
if(Object.isExtensible(user)){
    user.site = 'www.google.com.tw';
}

console.log(user);