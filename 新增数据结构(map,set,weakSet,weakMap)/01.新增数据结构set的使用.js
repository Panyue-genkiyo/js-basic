//1.创建set结构
let numSet = new Set();

numSet.add(1);
numSet.add(2);
numSet.add(3);
numSet.add(4);
numSet.add(4); //元素是不能重复的set

numSet.add({});
numSet.add({}); //注意这两个对象是两个不同的对象，有着自己的内存地址

const obj = {};
numSet.add(obj);
numSet.add(obj); //此时是同一个对象因为obj指向的是同一个内存单元

console.log(numSet);

//给数组去重
const arr = [33,25,620,30,33,24,25];
//new Set(arr) 这个参数arr是一个可迭代对象
const newArr = [...new Set(arr)]; //去重 
//将set转换为array还有另一种方式 Array.from(new Set(...)); 因为set本身也是可迭代对象
console.log(newArr);


//常见属性和方法 size
console.log(numSet.size); //5

//add方法 
//delete方法(必须传递要删除的元素值，而不是索引值)
numSet.delete(4);
console.log(numSet);

//has方法 判断某个元素是否在这个set中
console.log(numSet.has(3)); //true

//clear() 清空set
numSet.clear();
console.log(numSet);

//遍历set
numSet.add(4).add(5).add(6); 
numSet.forEach((value)=>{
    console.log(value);
})

//for of 遍历可迭代对象
for(let v of numSet){
    console.log(v);
}