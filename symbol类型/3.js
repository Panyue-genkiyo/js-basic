/*symbol在缓存容器中的使用：就是生成一个永远不会被覆盖的字符串*/

let symbol  = Symbol('这是一个symbol');

let obj = {
    name: 'panyue',
    [symbol]: 'www.com.you' //类似于私有属性
}

//symbol不能使用for-in for-of来遍历 enmurable:false
for(let key in obj){
    console.log(`${key}---${obj[key]}`);
}

for(let value of Object.keys(obj)){
    console.log(value); //只有name出现
}

//想要遍历symbol就只能使用Object.getOwnPropertySymbols方法

for(const key of Object.getOwnPropertySymbols(obj)){
    console.log(key);
}

//遍历所有的属性使用Reflect.ownKeys方法
for(const key of Reflect.ownKeys(obj)){
    console.log(key); //name, symbol('只是一个symbol')
}


let site = Symbol('this is a symbol');
class User{
    constructor(name){
        this.name = name;
        this[site] = 'www.google.com';
    }
    getName(){
        return `${this[site]} + ${this.name}`;
    }
}

let user = new User('李四');
console.log(user.getName());

//此时就把"site"属性保护起来了(用Reflect.ownKeys和Object.getOwnPropertySymbols也无法访问到) 私有属性
for(let key in user){
    console.log(key); //name
}
