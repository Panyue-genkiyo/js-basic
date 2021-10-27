//__proto__原来只是属性访问器 getter和setter


let hd = {
    name: 'hd'
};

hd.__proto__ = {
    show(){
        console.log(this.name)
    }
}

hd.show();

// hd.__proto__ = 99; //getter和setter不让你在这里设置一个字面量给原型,所以就被驳回了

hd.show(); //hd 依然ok why？？

let hd2 =  Object.create(null); //没有原型
//此时__proto__就可以被设置成我们想设置的任何值了因为它此时已经不是getter和setter，没有原型上的方法来对它设置时进行拦截
hd2.__proto__ = 1;
console.log(hd2.__proto__)  //1;ok

//回顾
// let hd = {
//    action: {}, 
//    get proto(){
//        return this.action;
//    },
//    set proto(value){
//        if(value instanceof Object){
//            this.action = value;
//        }
//    }
// };

// hd.proto = 'abc'; //被毙掉，因为value不是对象无法被重新设置原型
// hd.proto = { view: 'h' } //ok
// // hd.proto = []
// console.log(hd.proto); //abd

