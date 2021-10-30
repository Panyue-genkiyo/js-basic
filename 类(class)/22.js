/*使用Instanceof检测对象实现*/

// function User(){

// }

// function Admin(){
    
// }

// Admin.prototype = Object.create(User.prototype);
// let hd = new Admin();
// console.log(hd instanceof Admin); //判断Admin.prototype是否在hd的原型链上

// console.log(hd instanceof User); //true 同理

//递归实现
// function checkPrototype(obj, constructor){
//     if(!obj.__proto__) return false;

//     if(obj.__proto__ == constructor.prototype) return true;

//     check(obj.__proto__, constructor); //递归
// }

// console.log(checkPrototype(hd, User))

//类一样
class User{
    
}

class Admin extends User{
    
}

let hd = new Admin();
console.log(hd instanceof Admin); //true
console.log(hd instanceof User); //true
