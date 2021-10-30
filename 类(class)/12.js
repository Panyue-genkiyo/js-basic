/*使用weakmap保护属性*/

/*使用weakmap定义保护属性protected*/

//const host = new WeakMap(); //到时候模块化导出这里是不会导出这个host的，所以在外部它是看不到这个host的；

//同样的可以定义多个保护属性
const protecteds = new WeakMap();

class Common{
   constructor(){

    protecteds.set(this, {
        host: 'https://www.google.com.tw'
    });

   }  
   
   set host(url){

     if(!/^https?:/i.test(url)){
        throw new Error('url must begin with http or https');
      }

      protecteds.set(this, { ...protecteds.get(this), host: url });

   }

   get host(){

     return protecteds.get(this).host;

   } 
}

class User extends Common{
    constructor(name){
        super();
        protecteds.set(this, {...protecteds.get(this), name}); //此时在对象中是看不见的，因为我们使用map进行管理的
        // this.name = name; 
    }
    get name(){
       return protecteds.get(this)['name'];
    }

    set name(name){
        protecteds.set(this, {...protecteds.get(this), name});
    }
}

let hd = new User('hd');

console.log(hd);
hd.host = 'http://www.hdcvd.com';
console.log(hd.host); //注意weakMap是为每对象保存这个值，所以每个对象的host值都是不一样的。与静态属性不同

let py = new User('py');
py.host = 'http://www.panyue.com';
console.log(py.host);