// function Fn() {
//     this.x = 100;
//     this.y = 200;
//     this.getX = function () {
//         console.log(this.x);
//     }
// }
// Fn.prototype.getX = function () {
//     console.log(this.x);
// };
// Fn.prototype.getY = function () {
//     console.log(this.y);
// };
// let f1 = new Fn;
// let f2 = new Fn;
// console.log(f1.getX === f2.getX); //false
// console.log(f1.getY === f2.getY); //true
// console.log(f1.__proto__.getY === Fn.prototype.getY);  //true
// console.log(f1.__proto__.getX === f2.getX);//false
// console.log(f1.getX === Fn.prototype.getX);//false
// console.log(f1.constructor);//Fn
// console.log(Fn.prototype.__proto__.constructor);//Object
// f1.getX(); //100
// f1.__proto__.getX();//undefined
// f2.getY();//200
// Fn.prototype.getY();//undefined


// function fun(){
//     this.a = 0;
//     this.b = function(){
//         alert(this.a);
//     }
// }
// fun.prototype = {
//     b:function(){
//         this.a = 20;
//         alert(this.a);
//     },
//     c:function(){
//         this.a = 30;
//         alert(this.a)
//     }
// }
// var my_fun = new fun();
// my_fun.b(); //0
// my_fun.c();//30

// function C1(name) {
//     if (name) {
//         this.name = name;
//     }
// }
// function C2(name) {
//     this.name = name;
// }
// function C3(name) {
//     this.name = name || 'join';
// }
// C1.prototype.name = 'Tom';
// C2.prototype.name = 'Tom';
// C3.prototype.name = 'Tom';
// alert((new C1().name) + (new C2().name) + (new C3().name));  //Tomundefinedjoin


// var a = { 
//     num:0,
//     valueOf(){
//         return ++this.num
//     }
// }
// let i = 0;
// Object.defineProperty(global, 'a', {
//     get(){
//         return ++i;
//     }
// })

// a = [1,2,3];

// a.toString = a.shift; //ok

// if (a == 1 && a == 2 && a == 3) {
//     console.log('OK');
// }

// function Dog(name) {    
//     this.name = name;
// }

// Dog.prototype.bark = function () {  
//     console.log('wangwang');
// }

// Dog.prototype.sayName = function () {  
//     console.log('my name is ' + this.name);
// }/*let sanmao = new Dog('三毛');sanmao.sayName();sanmao.bark();*///=>基于内置的new关键词，我们可以创建Dog的一个实例sanmao，实例可以调取原型上的属性和方法，现在的需求是：自己实现一个_new方法，也能模拟出内置new后的结果function _new() {    //=>完成你的代码}let sanmao = _new(Dog, '三毛');sanmao.bark(); //=>"wangwang"sanmao.sayName(); //=>"my name is 三毛"console.log(sanmao instanceof Dog); //=>true

// function _new(fn, ...args) {
//     //=>完成你的代码
//     let obj = Object.create(fn.prototype); //是obj的原型指向fn.prototype, obj.__proto__ = fn.prototype
//     // let obj = {};
//     let result = fn.apply(obj, args); //调用
//     return result !== null && (typeof result === "object" || typeof result === "function") ? result : obj;
// }

// let sanmao = _new(Dog, '三毛');
// sanmao.bark(); 
// sanmao.sayName();
// console.log(sanmao instanceof Dog);


