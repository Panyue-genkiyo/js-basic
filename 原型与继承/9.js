/*原型检测之Object.isPrototypeOf*/

let a = {};
let b = {};
let c = {};
console.log(b.isPrototypeOf(a)); //检查b对象是否在a对象的原型链上


// //因为b.__proto__ === a.__proto__ === Object.prototype;
// console.log(b.__proto__.isPrototypeOf(a)); //true

Object.setPrototypeOf(a,b); //把b对象设置为a对象的原型
Object.setPrototypeOf(b,c); //把c对象设置为b对象的原型
console.log(b.isPrototypeOf(a));//true
console.log(c.isPrototypeOf(a));//true


