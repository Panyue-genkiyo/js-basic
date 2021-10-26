/*原型链检测*/

function A(){
    
}

let a = new A();
/*instanceof表示检测a的原型链上是存在A.prototype*/
console.log(a instanceof A); //true
console.log(a instanceof Object); //true

function B(){
    
}

let b = new B()
A.prototype = b;

let a1 = new A();
//c.__proto__ === b b.__proto__ === B.prototype B.prototype.__proto__ === Object.prototype
console.log(a1 instanceof B); //true
console.log(a1.constructor === B) //true c与A之间的联系constructor被弄丢了

function C(){
    
}

let c = new C();

B.prototype = c;

let b2 = new B();

A.prototype = b2;

let a2  = new A();

console.log(a2 instanceof C); //true //此时又一次的更改原型链

console.log(a2.__proto__ === b2, b2.__proto__ === c); //true true
 
console.log(a2.constructor === C); //true

console.log(a2 instanceof A); //true