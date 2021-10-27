/*继承之后对constructor属性的影响*/

function Hd(){

}

function User(){
}

User.prototype.name = function(){
    console.log('user name method');
}

function Admin(){
    
}

Admin.prototype = Object.create(User.prototype); //这里其实就已经把原来Admin.prototype的constructor搞丢了
//所以你需要手动添加上constructor属性
Admin.prototype.constructor = Admin;
Admin.prototype.role = function(){
    console.log('admin role'); 
}

//继承之后对constructor的影响
console.log(Admin.prototype.constructor); //User(沿着原型链向上查找) 原来的constructor丢了！！！注意这是一个问


let a  = new Admin();
let b = new a.__proto__.constructor();
b.role(); //ok！！ 没问题
// a.name(); //user name method
// a.role(); //admin role

// function Member(){
    
// }

// Member.prototype.__proto__ = User.prototype; 

// Member.prototype.role = function(){
//     console.log('member role'); 
//  }
 