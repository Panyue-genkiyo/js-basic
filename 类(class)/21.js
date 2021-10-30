/*静态继承原理*/


// function User(){
    
// }


// User.site = 'www.google.com';
// User.show  = function(){
//    console.log('use static method');
// }

// function Admin(){
    
// }

// Admin.__proto__ = User; 


// console.log(User);
// Admin.show();
// console.log(Admin.site);


class User{
    static site =  'www.google.com';
    static show(){
        console.log('user.static show');
        console.log(this === Admin); //true;调用的时候 Admin.show()
    }
}

//Admin.__proto__ === User; class内部的实现其实就是函数原型
class Admin extends User{
    
}

Admin.show();

