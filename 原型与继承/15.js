/*this与原型链无关的哦！！*/
let hd = {
    name: 'hello',
};

/*改变其原型链对this没影响*/
Object.setPrototypeOf(hd, {});


let User = {
    name: 'py',
    show(){
        console.log(this.name);
    }
}

Object.setPrototypeOf(hd, User);

//这里this始终是调用该方法的对象
hd.show(); //this === hd 所以结果依然是hello而不是py


