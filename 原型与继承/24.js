/*禁止constructor被遍历*/

function User(){
}

User.prototype.name = function(){
    console.log('user name method');
}

function Admin(){
    
}

Admin.prototype = Object.create(User.prototype); 
// Admin.prototype.constructor = Admin;
//查看属性定义
// console.log(Object.getOwnPropertyDescriptors(Admin.prototype));
Object.defineProperty(Admin.prototype,'constructor', {
    value:Admin,
    enumerable:false, //不可遍历
})

Admin.prototype.role = function(){
    console.log('admin role'); 
}


console.log(Admin.prototype.constructor);


let a  = new Admin();
// let b = new a.__proto__.constructor();
// b.role(); //ok！！ 没问题

for(let k in a){
    console.log(k); //自己加上原型链 constructor role name
}
