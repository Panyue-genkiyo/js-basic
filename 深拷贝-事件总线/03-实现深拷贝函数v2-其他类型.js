function isObject(value){
    const valueType = typeof value;
    return (value !== null) && (valueType === 'object' || valueType === 'function');
}

function deepClone(oldObj){

    //判断是否为map
    if(oldObj instanceof Map){
        return new Map([...oldObj]);
    }

    //判断是否为set
    if(oldObj instanceof Set){
        return new Set([...oldObj]);
    }

    //如果是一个symbol的value
    if(typeof oldObj === 'symbol'){
        return Symbol(oldObj.description);
    }

    if(typeof oldObj === 'function'){
        return oldObj; //判断其是不是函数，如果是则直接返回 //函数类型是直接返回的
    }

    //判断oldObj是否为对象类型
    if(!isObject(oldObj)){
        //不是对象类型直接返回
        return oldObj;
    }

    const newObj = Array.isArray(oldObj) ? [] : {}; //判断是数组还是对象
    for(let key in oldObj){
        newObj[key] = deepClone(oldObj[key]);
    }

    //对key为symbol类型进行处理
    const symbolKeys = Object.getOwnPropertySymbols(oldObj);
    for(const sKey of symbolKeys){
        //在不同的对象可用相同的symbol作为key值
        newObj[sKey] = deepClone(oldObj[sKey]);
    }

    return newObj;

}

//测试代码
let s1 = Symbol('s1');
let s2 = Symbol('s2');
const obj = {
    name: 'py',
    age:21,
    friend:{
        name: 'jack',
        age: 17,
        address:{
            city:'new york',
        }
    },
    hobbies:['coding', 'swimming', 'playing'],
    foo:function (){
        console.log('foo');
    },
    [s1]:'s1',
    s2:s2,
    set:new Set([1,3,5]),
    map:new Map([['a',1],['b',2]]),
}

const newObj = deepClone(obj);
console.log(newObj === obj); //false
newObj.friend.name = 'tom';
newObj.map.set('c',3);
console.log(obj);
console.log(newObj);