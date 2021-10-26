/*给我一个对象我还你一个新的*/

function User(name){
    this.name = name;
}


// User.prototype.show = function(){
//     console.log(this.name);
// }

//如果要强行覆盖记得添上constructor;
User.prototype = {
    constructor: User, //很重要
    show(){
        console.log(this.name);
    }
}

let h = new User('h');

//不添加constructor的结果
// console.log(h.constructor) //Object

function createObject(basis, ...args){
    let constructor = basis.constructor; //User，通过constructor可以反推构造函数
    return new constructor(...args);
}

let py = createObject(h, 'py');

console.log(py.__proto__.__proto__ === Object.prototype) //true
console.log(Object.prototype.__proto__); //null
py.show(); //ok!! boom