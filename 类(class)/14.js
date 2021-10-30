/*继承*/

//原型的继承复习

// function User(name){
//    this.name = name;  
    
// }

// function Admin(name){
//    User.call(this, name);
// }

// Admin.prototype = Object.create(User.prototype); 
// Object.defineProperty(Admin.prototype,'constructor', {
//     enumerable: false,
// })
// Admin.prototype.show = function(){
//     console.log(this.name);
// }

// let hd = new Admin('admin-hd');

// console.log(hd.constructor.name); //User
// hd.show();

class User{
    constructor(name){
        this.name = name;
    }
}

class Admin extends User{
    constructor(name){
        super(name); ///super()调用父类的构造函数给子类进行初始化
    }
}