/*class声明的方法为什么不能遍历*/

function Hd(name){
    this.name = name;
}

Hd.prototype.show = function(){
    
}

let h = new Hd('hd');

for(const key in h){
    console.log(key); //show 会把方法遍历出来
}

for(const key in h){
    if(h.hasOwnProperty(key)){
        console.log(key); //name 不会遍历出show
    }
}

console.log(JSON.stringify(Object.getOwnPropertyDescriptor(Hd.prototype, 'show'), null,2)); //可以被遍历



class User{
    constructor(name){
        this.name = name;
    }
    show(){
        
    }
}
//注意,"enumerable": false,原型上的方法默认不能被遍历
console.log(JSON.stringify(Object.getOwnPropertyDescriptor(User.prototype, 'show'), null,2)); 

let u = new User('user');

for(const key in u){
    console.log(key);  //name //此时不用加h.hasOwnProperty(key)判断就不遍历出show
}

