function sum(num1, num2){
    //类型出错之后抛错误
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        throw new TypeError('请输入数字'); //抛出错误
    }
    console.log(num1 + num2);
}

// sum({ a: 1 }, 2); //错误调用

sum(20, 30);