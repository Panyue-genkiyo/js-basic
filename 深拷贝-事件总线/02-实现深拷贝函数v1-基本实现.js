function isObject(value){
    const valueType = typeof value;
    return (value !== null) && (valueType === 'object' || valueType === 'function');
}

function deepClone(oldObj){
    //判断oldObj是否为对象类型
    if(!isObject(oldObj)){
        //不是对象类型直接返回
        return oldObj;
    }
    const newObj = {};
    for(let key in oldObj){
        newObj[key] = deepClone(oldObj[key]);
    }
    return newObj;
}

//测试代码
const obj = {
    name: 'py',
    age:21,
    friend:{
        name: 'jack',
        age: 17,
        address:{
            city:'new york',
        }
    }
}

const newObj = deepClone(obj);
console.log(newObj === obj); //false
newObj.friend.name = 'tom';
console.log(obj);
console.log(newObj);