//冻结属性
"use strict"

let user = {
   name: 'panyue',
   age: 36
}
Object.freeze(user); //冻结 => 属性值不能被修改被删除被重新配置
console.log(JSON.stringify(Object.getOwnPropertyDescriptors(user), null, 2)); 


// user.site = 'www.baidu.com'; //此时他已经默认被封闭了无法扩展,所以也无法添加属性

// user.name = 'hello'; //无法修改属性值，这是与seal不同的地方

// delete user.name; 也无法删除属性

console.log(Object.isFrozen(user)); //true


//但是可以遍历,但就是无法修改属性的一切了
for(let [k, v] of Object.entries(user)){
    console.log(`k:${k}, v:${v}`);
}