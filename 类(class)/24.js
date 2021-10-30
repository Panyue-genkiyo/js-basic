//内置类继承的原型实现

function Arr(...args) {
    // console.log(args);
    args.forEach(item => this.push(item));
    this.first = () => {
        console.log(this);
        return this[0];
    }
    
    this.max = () => {
       return this.sort((a, b) => b - a)[0];   
    }
}
Arr.prototype = Object.create(Array.prototype); ///继承内置的构造函数

let hd = new Arr(1,2,3,99,5,6);
console.log(hd);
console.log(hd.first());
console.log(hd.max());