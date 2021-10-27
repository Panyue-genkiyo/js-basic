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
        console.log(this, 'in request'); //证明this是下面的py，Ok证明完毕
        return '请求后台';
    }
}

const Credit = {
    __proto__:Request, //内部继承
    total(){
        // console.log(this);
        // this.__proto__是有问题的
        //这里this.__proto__ = Admin.prototype; 所以在查找this.__proto__.ajax的时候是undefined; 调用undefined()会出问题
        //所以这里只能使用super  this.__proto__ !== super
        // console.log(this.__proto__.ajax); //undefined
        console.log(`${super.ajax()},积分统计`)
        // console.log(`${super.ajax()},积分统计`);
    }
}

extend(Admin, User);

//属性合并到Admin的原型上直接mixin混合 间接实现多继承
//关系: Admin.prototype.__proto__ === User.prototype; Admin.prototype.total = Credit.total(引用)
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