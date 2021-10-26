/*自定义对象原型设置*/

let hd=  { name: 'hd' };

let py = { name: 'py' };

console.log(hd.__proto__ === Object.prototype) //true，此时原型已经到头

//设置hd的原型为py
console.log(Object.setPrototypeOf(hd, py));;

console.log(hd.__proto__ === py); //true;

py.hello = function(){
    console.log(this.name);
}

hd.hello(); //this === hd; 没有就去父亲那里找

console.log(Object.getPrototypeOf(hd)); //py {....}
console.log(Object.getPrototypeOf(py)); //Object.prototype

