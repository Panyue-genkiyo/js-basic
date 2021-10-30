/**/
//在子类的constructor中执行super

class User{
    constructor(name){
        this.name = name;
    }
}

class Admin extends User{
    // constructor(){
    //     //这里必须要调用super
    // }
   
    //不手动写constructor默认给你加上了
    constructor(...args){
        super(...args);
        //且this只能在super调用之后才能调用 因为系统要保证子类的优先级要比父类高
        this.site = 'www.xxx.com';
    }
    
}

let hd = new Admin('py');
console.log(hd);


