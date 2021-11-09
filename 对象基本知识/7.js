let hd = {};
let name = 'title'

hd[name] = 'js';

console.log(hd.title);

let id = 0;
let hd1 = {};

hd1[`id-${++id}`] = id;
console.log(hd1)


const users = [
    {
        name: 'test1',
        age:1
    },
    {
        name: 'test2',
        age:2
    },
    {
        name: 'test3',
        age:3
    }
];


//数组变对象结构
let res = users.reduce( ( obj, cur, index) => {
    obj[`${cur.name} - ${index}`] = cur;
    return obj;
}, {});

//转换json为字符串

console.log(JSON.stringify(res, null, 2));

console.log(res);

//assign
const test =  Object.assign({a: 1}, { b:2 });

console.log(test); //合并

//测试函数
function upload(params){
    let opt = {
        size: 9
    }
    opt = Object.assign(opt, params); //后面覆盖前面的
    console.log(JSON.stringify(opt, null, 2));
}

upload({
    size: 99,
    type: 'jpeg'
});



