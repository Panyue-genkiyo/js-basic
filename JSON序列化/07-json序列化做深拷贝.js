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
    //序列化不会处理函数 //因为函数并不是json所支持的格式
    foo:function (){
        console.log('foo')
    }
}


//json序列化处理深拷贝 暂时有缺陷 循环引用/函数/symbol...不会处理
const cloneObj = JSON.parse(JSON.stringify(obj));
cloneObj.friends[0].name = 'test3';
console.log(cloneObj);
console.log(obj); //ok