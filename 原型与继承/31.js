/*mixin内部继承与super关键字*/

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


const Request = {
    ajax(){
        return '请求后台';
    }
}

const Credit = {
    __proto__:Request, //内部继承
    total(){
        // console.log(this);
        // this.__proto__是有问题的
        console.log(`${super.ajax()},积分统计`);
    }
}

extend(Admin, User);

//属性合并到Admin的原型上直接mixin混合 间接实现多继承
Admin.prototype = Object.assign(Admin.prototype, Credit);


let py = new Admin('py', 21);
py.show();
//ok mixin成功了！！！
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