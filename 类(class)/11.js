/*使用symbol定义保护属性protected*/


// const HOST = Symbol('host'); //唯一的symbol 正因为是唯一的才可以被封装到类中不被外界访问

const protecteds = Symbol();

class Common{
    //子类是可以正常访问的
    // [HOST]='www.google.com';
   
    constructor(){
        //把所有受保护属性都压到这个以symbol为key的对象中
        this[protecteds] = {};
        this[protecteds].host = 'https://www.goodle.com.tw';
    }

    set host(url){
        if(!/^https?:/i.test(url)){
           throw new Error('host must start with http:// or https://');
        }
        this[protecteds].host = url;
     }
 
     get host(){
         return this[protecteds].host;
     }
}

class User extends Common{
    constructor(name){
        super();
       this.name = name;
    }    
}

let hd = new User('hd');

// hd.host = 'ssss'; //error
console.log(hd.host);
