const hd = {
    name: 'panyue',
}


let arr = ['www.panyue.com'];

console.log(arr.hasOwnProperty('length')); //true

console.log(arr.hasOwnProperty('concat')); //false 原型上的不算

//如果都要监测(即看自身,也看原型, in)
console.log('length' in arr ); //true
console.log('concat' in arr); //true

console.log(arr);

let a = {
    name: 'panyue',
}

let b = {
    url: 'www.panyue.com'
}

// a.__proto__ = b
Object.setPrototypeOf(a,b); //b是a的原型
console.log(a.hasOwnProperty('url')) //false
console.log('url' in a); //true

console.log(a)

function oss(options){
    if(!options.hasOwnProperty('host')){
        throw new Error('必须设置主机地址')
    }
}

oss({
    name: 'panyue', //监测错误
});
