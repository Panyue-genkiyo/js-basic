//回调函数，在其他函数中调用的函数

let arr = [1,2,43];

//map是函数，在map里面调用的函数就是回调函数
// arr = arr.map((value) => value + 100);
// console.log(arr);

//注意这两种map的写法,下面这种直接改变原数组
arr.map((value, index, arr) => arr[index] += 100);
console.log(arr);