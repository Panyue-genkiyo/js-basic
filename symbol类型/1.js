//symbol让我们的值永远是唯一的， 可以当做永远不可能重复的字符串
//定义生声明symbol的几种方式

"use strict";

let hd = Symbol();
console.log(typeof hd); //'symbol'
let edu = Symbol();

console.log(hd === edu); //两个symbol是永远不可能一样的 false
 
//定义完symbol是不能再往里面压属性的 
// hd.name = 'sss';  error
// console.log(hd.name); error 非严格模式下undefined

let a  = Symbol('hello');
console.log(a.toString());
console.log(a.description); //symbol的描述 'hello'


let b =  Symbol.for('hd'); //注意用symbol.for定义的symbol系统会在内存当中记录有一个symbol，描述是hd
let c = Symbol.for('hd'); //判断是否已经存在声明了描述为hd的symbol， 如果存在则直接拿过来用 全局创建
console.log(b);
console.log(b === c); //true
//一个symbol如果多次被使用则可以使用symbol.for来声明

console.log(Symbol.keyFor(b)); //获取描述 'hd'

//注意普通用Symbol声明是不能通过Symbol.keyFor来获取描述的
console.log(Symbol.keyFor(a)); //undefined

//3个不同的symbol
// let a1 = Symbol('w');
// let a2 = Symbol('w');
// let a3 = Symbol('w');

//3个相同的symbol
let a1 = Symbol.for('w');
let a2 = Symbol.for('w');
let a3 = Symbol.for('w');
console.log(a2 === a3, a1 === a3); //true true
