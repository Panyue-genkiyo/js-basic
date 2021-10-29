/*对象属性的声明*/

class User{

    //也可以在site外面直接声明属性
    site = 'www.google.com'; //这个也是每个对象独有的属性

    constructor(name){
        this.name = name;
    }

    changeValue(value){
       this.site = value;   
    }

    show(){
        return `${this.site}: ${this.name}`;
    }

}

let hd = new User('hello');
hd.changeValue('never.top');
// hd.site = 'hello.com'
console.log(hd);