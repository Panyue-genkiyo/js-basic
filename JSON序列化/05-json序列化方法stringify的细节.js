const obj = {
    name:'panyue',
    age:21,
    friends: [
        {
            name:'test1',
            age:23
        },
        {
            name:'test2',
            age:24
        }
    ],
    hobbies:["swimming","running","eating"],
    //如果存在toJSON方法则直接会转换为toJSON方法的返回值
    // toJSON() {
    //     return 12344;
    // }
}


// 序列化
const json1 = JSON.stringify(obj);
console.log(json1)

//过滤 只保留name和friends //数组和回调函数
const json2 = JSON.stringify(obj,["name", "friends"]);

const json3 = JSON.stringify(obj,function(key,value){
    if(key === 'age'){
        return value + 1;
    }
    return value;
});

const json4 = JSON.stringify(obj,null,2);
//第三个缩进
const json5 = JSON.stringify(obj,null,"~~");

console.log(json5);