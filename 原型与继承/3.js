/*函数拥有多个长辈*/


/*函数也是对象，自然会有原型链*/
function User(){
    
};

/*prototype9(显式)和__proto__(隐式)*/
console.log(User);
User.prototype.show = function(){
    console.log('hello');
}
let u = new User(); //找prototype;
u.show();
console.log(u.__proto__ === User.prototype);  //true
console.log(User.hasOwnProperty('arguments')); //找__proto__ true


/*user自己的父级*/
User.__proto__.view = function(){
    console.log('user function view method');
}
User.view();

