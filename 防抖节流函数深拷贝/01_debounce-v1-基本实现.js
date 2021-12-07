//防抖函数的基本实现
function debounce(fn,delay){
    let timer = null; //闭包
    return function (...args){
        //this === inputElement
        if (timer) clearTimeout(timer); //清除上次事件的定时器
        //保存本次事件的定时器
        timer = setTimeout(() => {
            //箭头函数没有自己的this，则会去上层作用域拿到this
            fn.apply(this, args); //要执行的函数
        }, delay);
    };
}