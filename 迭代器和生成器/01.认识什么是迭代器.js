// const iterator = {
//     //要符合迭代器要求
//     next: function(){
//         return {
//             done: true,
//             value: 'hello'
//         }
//     }
// // };

// 从迭代器的定义我们可以看出来，迭代器是帮助我们对某个数据结构进行遍历的对象。
// next方法有如下的要求：
//  无参数或者传递一个参数函数，返回一个应当拥有以下两个属性的对象：
//  done (boolean)
// 如果迭代器可以产生序列中的下一个值，则为false。（这等价于没有指定 done 这个属性。）
// 如果迭代器已将序列迭代完毕，则为 true。这种情况下，value 是可选的，如果它依然存在，即为迭代结束之后的默认返回值
// value:迭代器返回的任何JavaScript值,done 为true 时可省略。

let names = ['abc', 'cba', 'nba'];
let index = 0;
//创建迭代器访问names
const namesIterator = {
    next:function(){
        //最后返回{ done:true,value:undefined }
        if(index < names.length){
            return {done: false, value: names[index++]};
        }else{
            return { done:true, value: undefined };
        }
    }
}


console.log(namesIterator.next().value);
console.log(namesIterator.next().value);