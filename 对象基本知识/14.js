//使用访问器来保护数据
"use strict"

const user = {
    data:{
        name: 'panyue',
        age: 36
    },
    set age(value) {
        if(typeof value !== 'number' || value < 0 || value > 100){
            throw new Error("年龄格式错误")
        }
        this.data.age = value;
    },
    get age(){
        return this.data.age
    }
};


// user.age = 10000;  此时随意在对象外进行修改程序会变的不可控
// user.age = '111';
console.log(user); //使用访问器来保证属性的安全操作