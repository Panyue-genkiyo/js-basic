/*原型关系详解与属性继承实例*/

function User(){

}

console.log(User); //这个函数(属性)包含prototype(new出来的对象的原型指向它)和__proto__(函数本身也是对象所以会有__proto__)
let u = new User();

//注意
console.log(User.prototype.__proto__ === Object.prototype); //true
Object.prototype.show = function(){
    console.log('show in obj!!!');
}

u.show(); //没问题！！
console.log(User.__proto__.__proto__ === Object.prototype); //true
User.show(); //没问题
/*User.__proto__和User.prototype指向同一个父级原型对象*/
/*Object.prototype是顶级原型对象没有__proto__(null)*/
console.log(Object.prototype.__proto__ === null); //true
// console.log(Object.__proto__);
