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
    hobbies:["swimming","running","eating"]
}

//setItem会把obj转换为字符串类型，默认([Object object])
//将obj转换为字符串类型(json格式)
const objString = JSON.stringify(obj);
localStorage.setItem("obj", objString); // 存储

//再将json格式字符串还原为js对象
console.log(JSON.parse(localStorage.getItem("obj"))); // 获取