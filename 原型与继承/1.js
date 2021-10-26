/*没有原型的对象也是存在的*/
// let hd = {};

// console.log(Object.getPrototypeOf(hd)); //Object


//此时注意obj是没有原型的
//完全的数据字面量对象 没有原型的对象
let obj = Object.create(null, {
    name: {
        value: 'panyue'
    }
});

console.log(Object.getPrototypeOf(obj));  //null
// console.log(obj.hasOwnProperty('name'));// undefined 报错obj以及obj的原型上没有该方法





