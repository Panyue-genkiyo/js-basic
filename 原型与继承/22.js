/*继承对新创建对象的影响*/


function User(){
}

User.prototype.name = function(){
    console.log('user name method');
}

function Admin(){
    
}

let a  = new Admin();
//a.role(); 

// Admin.prototype = Object.create(User.prototype); 新建一个原型对象

Admin.prototype.__proto__ = User.prototype;

Admin.prototype.role = function(){
    console.log('admin role'); 
}

// a.role(); //error 如果通过Object.create()方式继承，之后即使改变了函数原型Admin.prototype，但是在这个位置这个a依然是指向“老的，那个已被抛弃的原型对象”,所以这里找不到role这个方法
a.role(); //ok！！通过Admin.prototype.__proto__ = User.prototype;改变原来原型对象的父级的这种方式，就可以访问到了
