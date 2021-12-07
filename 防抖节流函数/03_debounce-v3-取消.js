function debounce(fn,delay, immediate = false){
    let timer = null;
    let isInvoke = false;

    const fnByDebounce = function (...args){
        //this === inputElement
        if (timer) clearTimeout(timer); //清除上次事件的定时器

        //判断是否需要立即执行
        if(immediate && !isInvoke){
            //每个阶段的开头我都希望它立即执行一次
            fn.apply(this, args);
            isInvoke = true;
        }else{
            //保存本次事件的定时器
            timer = setTimeout(() => {
                //箭头函数没有自己的this，则会去上层作用域拿到this
                fn.apply(this, args); //要执行的函数
                isInvoke = false; //重置
                timer = null; //重置
            }, delay);
        }
    };

    //封装取消功能
    fnByDebounce.cancel = function (){
        if(timer) clearTimeout(timer);
        timer = null; //重置
        isInvoke = false;
    };

    return fnByDebounce;
}