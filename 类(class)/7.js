/*静态方法的实现原理*/

// function User() {
    //对象上
    // this.show = function(){
       
    // }
// }

//建议放到原型上
// User.prototype.show = function(){}


//函数也是对象
//此时下面这个show方法就是静态方法 定义到函数身上去了
// User.show1 = function(){}

// console.log(User); //[Function: User] { show: [Function (anonymous)] }

//同时你甚至可以把这个函数定义在函数对象的原型上
// User.__proto__.show2 = function(){
//     console.log(this); //注意这个this === User
//     console.log(this === User); //true
//     console.log(this === User.prototype.constructor); //true
// }

// User.show2();

// class User{
    

//     //普通方法定义到原型上
//     show(){
//         console.log(this === User); //false
//     }
    
//     //静态方法
//     //注意名字是一样但是是两个不同的方法
//     static show = function(){
//         console.log(this === User) //true
//     }

// }
// //下面这种写法定义静态方法是ok的
// // User.__proto__.show2 = function(){
// // }

// let hd = new User();
// hd.show();
// User.show();
// // console.log(hd);

class User{
    constructor(name = null, age = null, sex = 'male'){
        this.name = name;
        this.age = age;
        this.sex = sex;
    }

    static create(...args){
        //注意这里的this === User 所以是ok的
        return new this(...args);  
    }
}

let s = User.create('s');
console.log(s);