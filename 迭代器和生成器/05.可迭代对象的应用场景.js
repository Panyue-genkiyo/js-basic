/**
 * 可迭代对象的应用场景
 *  JavaScript中语法 for ..0f
   展开语法 (spread syntax)、yield*（后面讲）、解构赋值 ( Destructuring_ assignment)
   创建一些对象时 ：new Map(IterableJ)、new WeakMap(iterableObj)、new Set(iterableObj)、new WeakSet(iterableObj);
   一些方法的调用：Promise.all(iterable)、Promise.race(iterable)、Array.from(iterable);
 */


//1.for...of

//2.展开语法 ...
const iterableObj = {
    arr: [1,2,3], 
    //中括号可计算属性
    [Symbol.iterator](){
        let index = 0;
        return {
            //改成箭头函数绑定上层作用域的this 箭头函数没有this
            next:() => {
                return index < this.arr.length ? { done: false, value: this.arr[index++] } : { done:true }
            }
        }
    }
}

//展开可迭代对象
const newArr = [...iterableObj, ...[4,5,6]];
console.log(newArr); //[1,2,3,4,5,6]

//注意普通对象也可以展开但是用的不是迭代器，而是ES9新规范(ES2018)新增的的特性
console.log({ ...{name: 'hello', msg: 'welcome to the js world'} }); //这里不会把这个对象当成可迭代对象(不能使用for...of遍历)

//3.解构语法
const [a,b] = [1,2]; //这里依然是采用了迭代器的语法
console.log(a,b);

//注意跟上面一样这里依然不是采用迭代器的特性，是ES9新增的特性可以解构普通对象
const { name, age } = { name: 'hello', age: 18 }; 
console.log(name, age); //hello,18

//4.创建其他对象时
//比如set，new Set(iterableObj) 要求你传入一个可迭代对象作为参数
const set1 = new Set([1,3,5,5]); //true
// const set2 = new Set(1); //error number 1 is not iterable

//创建数组 Array.from(iterableObj) 也需要你传递一个可迭对象 转换函数类数组Arguments常用
console.log(Array.from('hello')); //['h','e','l','l','o']

//Promise.all(iterableObj) 也需要你传递一个可迭对象
//相当于 Promise.all([Promise.resolve(1),Promise.resolve(2),Promise.resolve(3)])
Promise.all([...[1,2,3]]).then(res => console.log(res)); //[1,2,3] res[1,2,3];
