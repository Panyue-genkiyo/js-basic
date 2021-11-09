/**
 *  组合（Compose）函数是在JavaScript开发过程中一种对函数的使用技巧、模式：
    比如我们现在需要对某一个数据进行函数的调用，执行两个函数什n1和fn2，这两个函数是依次执  那么如果每次我们都需要进行两个函数的调用，操作上就会显得重复
    那么是否可以将这两个函数组合起来，自动依次调用呢？
    这个过程就是对函数的组合 ，我们称之为 组合函数( Compose Function )；
 */


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