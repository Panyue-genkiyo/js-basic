// //map的使用

const obj1 = {
    name: 'whu'
}

const obj2 = {
    name: 'py'
}

// //将obj1和obj2都当做对象的key时都把它们转换为了字符串toString()方法 '[object Object]'作为key，后面的覆盖前面的
// //在对象{}中，对象是不能用来作为key的
// const info = {
//     [obj1]: 'aaa',
//     [obj2]: 'bbb'
// }

// console.log(info);

//map 允许对象作为key，当然也可以使用基本数据类型作为key
const map = new Map();
map.set(obj1, 'aaa');
map.set(obj2,'bbb');
map.set(1,'hello,Shanghai!');
console.log(map);


//entries [[key, value]] 通过构造方法创建map
const map2 = new Map([[obj1,1], [obj2,2]]);
console.log(map2);


//方法 set get 
//获取obj1的值
console.log(map.get(obj1)); //get
///has 判断某个key是否存在
console.log(map.has(obj2)); //true
//delete 删除这个key所对应的值
console.log(map.delete(1)); //true 删除成功返回true 删除失败返回false
console.log(map);

//清除clear
// map.clear(); 
// console.log(map);

//遍历map foreach  先是value后是key
map.forEach((value,key)=>{
    console.log(key,value);
});

//for of  entries
for(const [key,value] of map){
    console.log(key,value);
}
