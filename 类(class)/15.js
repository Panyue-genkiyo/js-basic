/*方法继承原理*/


//内部继承原理其实还是原型继承
class User{
    constructor(name){
        this.name = name;
    }
    
    //在User.prototype上添加show方法
    show(){
        console.log('show!!!')
    }
}


//Admin.prototype.__proto__ = User.prototype;
//且继承把我们原来的constructor默认给保存下来了

class Admin extends User{
    constructor(name){
        super(name); ///super()调用父类的构造函数给子类进行初始化
    }
}

let hd = new Admin('hd-admin');
//查找顺序 hd自身--->Admin.prototype{constructor:class Admin}---->User.prototype{constructor:class User}---->Object.prototype---->null
//Admin.prototype.__proto__ === User.prototype //就是原型继承的语法糖
hd.show();
