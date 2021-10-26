/*原型中constructor的引用*/

/*User.__proto__服务自己，User.prototype服务它所创建出来的对象*/
function User(name){
    this.name = name;
}

/*通过prototype上的constructor方法来找到我自身*/
User.prototype.show = function(){
    console.log(this.name); //this会一直变的
}

//别一整个覆盖！！！直接constructor丢掉了
// User.prototype = {
//     show(){
//         .....
//     }
// }

console.log(User.prototype.constructor === User); //true

let u  = new User.prototype.constructor('py'); // ok!
console.log(u); //是可以通过constructor来创建对象的
u.show();

let u2 = new u.constructor('py2');//原型链查找constructor属性是ok的
console.log(u2); //ok!!




