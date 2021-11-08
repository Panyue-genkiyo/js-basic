//
let m = 1000;

//当m发生变化时下面的代码自动重新执行, 响应依赖(m)的变化,自动响应式 
console.log(m);
console.log(m*2);
console.log(m ** 2);

//对象的响应式
const obj = {
    name: 'xxx',
    age:12
};

console.log(obj.name); //当name发生变化时, 下面的代码自动重新执行, 响应依赖(obj.name)的变化,自动响应式
console.log(obj.age); //当age发生变化时, 下面的代码自动重新执行, 响应依赖(obj.age)的变化,自动响应式
