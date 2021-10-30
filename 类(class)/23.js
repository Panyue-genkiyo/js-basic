//isPrototypeof检测继承关系

// let a = {};
// let b = {
//     __proto__: a,
// };

// console.log(a.isPrototypeOf(b)); //b的原型链是否存在a true

// let c = {
//    __proto__: b
// }

// console.log(a.isPrototypeOf(c)); //true
// console.log(c.isPrototypeOf(b)); //false


class Common{
    
}

class User extends Common{
    
}

class Admin extends User{
    
}

let hd = new Admin();

console.log(Admin.prototype.isPrototypeOf(hd)); ///true;
console.log(Common.prototype.isPrototypeOf(hd)); ///true;
