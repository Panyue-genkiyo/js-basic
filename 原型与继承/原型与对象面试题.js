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


