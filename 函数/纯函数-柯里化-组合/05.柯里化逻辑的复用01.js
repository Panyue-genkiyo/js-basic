function sum(m,n){
    return m + n;
}

//柯里化
function makeAdder(n){
    //重复使用第一个函数的逻辑将第一参数固定
    //柯里化逻辑的复用 闭包
    return function(m){
        return m + n;
    }
}

let res = makeAdder(5);
console.log(res(10));
console.log(res(1245));

