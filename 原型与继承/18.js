/*使用setPrototype代替__proto__*/

let user = {
    show(){
        return this.name;
    }
}


//__proto__ set/get

let hd = { name: 'hd' };
// hd.__proto__ = user;
//标准设置原型的方法: Object.setPrototypeOf
//user现在是hd的原型
Object.setPrototypeOf(hd, user);
console.log(hd.show());

//获取hd的原型  标准获取原型的方法: Object.getPrototypeOf
console.log(Object.getPrototypeOf(hd)); //{ show: fn }
