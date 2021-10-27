/*object.create与__proto__*/

let user = {
    show(){
        return this.name;
    }
}


//user变为hd的原型 
// let hd = Object.create(user);
//直接在第二个参数定义对象的特征
//但是注意Object.create只是定义对象的原型，而不能获取
// let hd = Object.create(user,{
//     name: {
//         value: 'hd'
//     }
// })
// // hd.name = 'hd';
// console.log(hd.show()); //this === show();

//__proto__ set/get 注意__proto__设置获取原型是不标准的方式

let hd = { name: 'hd' };
hd.__proto__ = user;
console.log(hd.show());

//获取hd的原型
console.log(hd.__proto__); //{show: fn}



