//针对数组生成迭代器函数

function createArrayIterator(arr){
    let index = 0;
    return {
        next(){
            return index < arr.length ? { done: false, value: arr[index++] } : {done:true}
        }
    }
}
//测试
let numIterator =createArrayIterator([1,3,5,6,-1,2]);

console.log(numIterator.next().value); //ok to

//无限的迭代器
function createNumberIterator(){
    let index = 0;
    return {
        next(){
            return { done: false, value: index++ } //无限的迭代器 done值永远不为true
        }
    }
}