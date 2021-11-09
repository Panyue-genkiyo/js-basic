//展开语法的基本使用
let hd =  [1,2,34];

let [a, b, c] = [...hd]; //等号的右边代表展开
console.log(a, b, c);

let [...edu] = [1,2,3]; //等号左边吸收

console.log(edu); //数组[1,2,3]


//函数里使用展开语法
// function sum(...rest){
//     return rest.reduce(( sum, cur ) => sum + cur, 0);
// }

// console.log(sum(1,2,3,4));

//展开语法的参数一定要放在最后面，哪怕是和默认参数一起，也是要放在默认参数后面
function sum(discount= 0, ...prices){
    let total = prices.reduce(( t, p ) => t + p, 0);
    return Math.round(total * (1 - discount));
}

console.log(sum(0.9, 199, 299, 877, 2000));

