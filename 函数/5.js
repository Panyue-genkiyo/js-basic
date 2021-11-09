//默认参数
//没有就用我的
function avg(total, year = 1){
    // year = year || 1
   return Math.round(total / year);   
}

console.log(avg(2000, 3));

//数组元素排序的例子
function sortArray(arr, type = 'asc'){
   return arr.sort(function(a,b){
       return  type === 'asc' ? a - b : b - a;
   })
};

console.log(sortArray([1,5,3,2,7,-8], 'dsc'));

//默认参数一定要在参数列表的后面的位置
function sum(total, discount = 0, dis = 0){
    return total * ( 1 - discount ) * (1 - dis);
}

console.log(sum(1000));
console.log(sum(1000, 0.1));
console.log(sum(1000, 0.1, 0.2));
