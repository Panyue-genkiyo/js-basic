/*多继承所造成的困扰 使用mixin(混合)实现多继承*/

//js无法直接继承多个原型
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

const Address = {
    getAddress(){
        console.log('获取收获地址');
    }
}

const Credit = {
    total(){
        console.log('积分统计');
    }
}

const Request = {
    ajax(){
        console.log('请求后台');
    }
}

extend(Admin, User);

//属性合并到Admin的原型上直接mixin混合 间接实现多继承
Admin.prototype = Object.assign(Admin.prototype, Request, Credit);


let py = new Admin('py', 21);
py.show();
//ok mixin成功了！！！
py.ajax();
py.total();


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

Object.assign(Member.prototype, Address);

let m = new Member('mem', 23);
m.show(); //mem 23
m.getAddress(); //ok mixin success!!