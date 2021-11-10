//注意可迭代对象(iterable)与迭代器(iterator)对象是不一样的概念记住

//可迭代对象里面需要存在[Symbol.iterator()]这个需要返回一个迭代器对象
//此时iterableObj是一个可迭代对象
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

//同时还可以这样访问

const iterator = iterableObj[Symbol.iterator]();
console.log(iterator.next().value); //1

//for of遍历可迭代对象 本质时使用迭代器对象的next方法
for(let i of iterableObj){
    console.log(i);
}