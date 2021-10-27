/*使用原型工厂封装继承*/

function User(name,age){
    this.name = name;
    this.age = age;
}
 
User.prototype.show = function(){
    console.log(this.name, this.age); 
}

function Admin(...args){
    //借用
    // User.call(this, name, age);
    User.apply(this, args);
}

extend(Admin, User);


let py = new Admin('py', 21);
py.show();

//继承封装
function extend(sub, sup){
   
   sub.prototype = Object.create(sup.prototype); 
   Object.defineProperty(sub.prototype,'constructor', {
    value: sub,
    enumerable: false
   })
}

function Member(name, age){
    User.call(this, name, age);
}

extend(Member, User);

let m = new Member('mem', 23);
m.show(); //mem 23