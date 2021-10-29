/*类的内部工作机制就是原型操作*/

class User{

    constructor(name){
        //实例化
        //属性域独立存放，每个对象一份独立的属性域
        this.name = name;
    }

    //自动把这个方法放到了user的原型上 共用
    show(){
        
    }
};

/*只是原来构造函数的语法糖*/
console.log(User.prototype.constructor === User); //true

let u = new User('z');
//不包含原型上的东西
console.log(Object.getOwnPropertyNames(u)); //['name']
//原型的属性的获取
console.log(Object.getOwnPropertyNames(User.prototype)); //['constructor', 'show']

function Hd(){}

console.log(Hd.prototype.constructor === Hd); //true

//原来的写法
Hd.prototype.show = function(){
}


