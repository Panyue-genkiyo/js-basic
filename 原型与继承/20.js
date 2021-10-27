/*改变构造函数原型并不是继承*/

//是原型的继承，而不是改变构造函数的原型

function User(){
    //此时如果这样写他会每个new出来的对象都保留一份一模一样的函数
    // this.name = function(){
    //     console.log('user name method');
    // }
}

/*共享一份函数*/
User.prototype.name = function(){
    console.log('user name method');
}

// let hd = new User();
// hd.name();

function Admin(){
    
}

Admin.prototype = User.prototype; //注意不是这样继承的！！别直接修改构造函数的原型
Admin.prototype.role = function(){
    console.log('admin role'); //连锁反应，一旦你改了Admin.prototype，User.prototype也会跟着改，我们并不想看到这样的结果
}
// let admin = new Admin();
// admin.name();

function Member(){
    
}

Member.prototype = User.prototype; //boom!!连锁反应boom掉了

Member.prototype.role = function(){
    console.log('member role'); //乱了！！直接覆盖掉之前的role方法，这样admin实例对象在调用role方法的时候直接调用这个方法，会出现意想不到的结果！！
 }
 

let a  = new Admin();
a.role(); //member role!!炸了