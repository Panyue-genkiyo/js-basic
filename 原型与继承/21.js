//原型的继承

function User(){
}

User.prototype.name = function(){
    console.log('user name method');
}

function Admin(){
    
}
// console.log(Admin.prototype.__proto__ === Object.prototype); //true
/*修改原型的原型(构造函数的原型也是对象)*/
// Admin.prototype.__proto__ = User.prototype; 

Admin.prototype.role = function(){
    console.log('admin role'); 
}

// console.log({ ...Admin.prototype });

// console.log(Object.create(User.prototype, {
//     ...Admin.prototype,
// }));

//另一种设置的方式 创建一个空对象让这个空对象的__proto__指向User.prototype 注意是空对象
Admin.prototype = Object.create(User.prototype);
// 此时你再往Admin.prototype中添加属性或方法它才不会被覆
Admin.prototype.role = function(){
    console.log('admin role'); 
}

let a  = new Admin();
a.name(); //user name method
a.role(); //admin role

function Member(){
    
}

Member.prototype.__proto__ = User.prototype; 

Member.prototype.role = function(){
    //这里就不会覆盖了，各是各的
    console.log('member role'); 
 }
 

let a1  = new Admin();
a1.role(); //admin role ok!!