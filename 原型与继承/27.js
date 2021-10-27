/*使用父类构造函数初始化属性*/

function User(name,age){
    // constructor(name, age){
    //     this.name = name;
    //     this.age = age;
    // }
    this.name = name;
    this.age = age;
}

User.prototype.show = function(){
    console.log(this.name, this.age); 
}

function Admin(...args){
    //借用
    // User.call(this, name, age);
    User.apply(this, args);
}

Admin.prototype = Object.create(User.prototype);

let py = new Admin('py', 21);
py.show();