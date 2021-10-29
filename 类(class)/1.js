/**class声明类的语法*/

class User{

    constructor(name){
        //初识化对象参数
        this.name = name;
    }

    show(){
        console.log('say hi', this.name);
    }
    //不用人为的去定义prototype
    get(){
        
    }
}

console.log(typeof  User); //function

new User("py").show();

let hd = class {
    
}; //ok 类似于匿名函数

