/*对象工厂派生对象并实现继承*/

function User(name,age){
    this.name = name;
    this.age = age;
}
 
User.prototype.show = function(){
    console.log(this.name, this.age); 
}

function admin(name, age){
    //对象的原型完成继承
    const instance = Object.create(User.prototype); //等于instance = {}, instance.__proto__ = User.prototype
    User.call(instance, name, age); //this = instance
    //每一个instance对象都有自己的role方法
    instance.role = function(){
        console.log('role');
    }
    return instance;
}


let ad = admin('py', 21);
ad.show();
ad.role();
// let py = new Admin('py', 21);
// py.show();



// function Member(name, age){
//     User.call(this, name, age);
// }

// let m = new Member('mem', 23);
// m.show(); //mem 23