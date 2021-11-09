function double(num){
    return num * 2;
}

function square(num){
    return num ** 2;
}

let res = square(double(5));
console.log(res);

//组合函数
function composeFn(m, n){
    return function(x){
        return m(n(x)); //函数组合 函数按顺序依次调用
    }
}

let mul = composeFn(square,double);
console.log(mul(5)); 