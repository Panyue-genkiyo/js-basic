//浅拷贝的多种方式

let hd = {
    name: 'panyue'
}


// let cms = hd; //引用 并不是赋值
//
// cms.name = 'cms';
//
// console.log(hd);

let cms = {
    name: hd.name //浅拷贝
}

let obj1 = {}
for(const key in hd){
    if(hd.hasOwnProperty(key)){
        obj1[key] = hd[key];
    }
}

console.log(obj1)
obj1.name = 'yahoo'
console.log(obj1, hd);

const obj2 =  Object.assign({}, hd); //浅拷贝
console.log(obj2);

const obj3 = { ...hd }; //浅赋值的几种方式
console.log(obj3);
obj3.name = 'hello';
console.log(obj3, hd); //浅赋值不深层
