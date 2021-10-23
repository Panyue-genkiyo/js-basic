//call与apply的区别
//区别就在传递参数的方式上

let lisi = {
    name: '李四'
};

let wanwu = {
    name: '王五'
}

function User(msg1, msg2){
    console.log(`${msg1} ${msg2} ${this.name}`);
}

User.call(lisi, 'hello', 'js'); //把lisi这个对象当做函数体里的this，并立即执行该函数
User.apply(wanwu, ['hello', 'js']);
//传递参数call是传递参数列表，apply是传递参数数组
//apply的妙用

let arr = [1,3,4,5,100,67];
//使用Math.max来查找数组的最大元素
console.log(Math.max.apply(Math, arr)); //注意这里不能再使用call因为call传递参数不能使用数组

