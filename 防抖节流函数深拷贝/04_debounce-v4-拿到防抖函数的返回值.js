// function debounce(fn,delay, immediate = false, resultCallback){
//     let timer = null;
//     let isInvoke = false;
//
//     const fnByDebounce = function (...args){
//         //this === inputElement
//         if (timer) clearTimeout(timer); //清除上次事件的定时器
//
//         //判断是否需要立即执行
//         if(immediate && !isInvoke){
//             //每个阶段的开头我都希望它立即执行一次
//             const result = fn.apply(this, args);
//             if(resultCallback) resultCallback(result); //将原函数的结果回调出去
//             isInvoke = true;
//         }else{
//             //保存本次事件的定时器
//             timer = setTimeout(() => {
//                 //箭头函数没有自己的this，则会去上层作用域拿到this
//                 const result = fn.apply(this, args); //要执行的函数
//                 if(resultCallback) resultCallback(result);
//                 isInvoke = false; //重置
//                 timer = null; //重置
//             }, delay);
//         }
//     };
//
//     //封装取消功能
//     fnByDebounce.cancel = function (){
//         if(timer) clearTimeout(timer);
//         timer = null; //重置
//         isInvoke = false;
//     };
//
//     return fnByDebounce;
// }
function debounce(fn,delay, immediate = false, resultCallback){
    let timer = null;
    let isInvoke = false;

    const fnByDebounce = function (...args){
        return new Promise((resolve, reject) => {
            //this === inputElement
            if (timer) clearTimeout(timer); //清除上次事件的定时器

            //判断是否需要立即执行
            if(immediate && !isInvoke){
                //每个阶段的开头我都希望它立即执行一次
                const result = fn.apply(this, args);
                if(resultCallback && typeof resultCallback === "function") resultCallback(result); //将原函数的结果回调出去
                resolve(result); //将原函数的结果返回回去
                isInvoke = true;
            }else{
                //保存本次事件的定时器
                timer = setTimeout(() => {
                    //箭头函数没有自己的this，则会去上层作用域拿到this
                    const result = fn.apply(this, args); //要执行的函数
                    if(resultCallback && typeof resultCallback === "function") resultCallback(result);
                    resolve(result); //将原函数的结果返回回去
                    isInvoke = false; //重置
                    timer = null; //重置
                }, delay);
            }
        })
    };

    //封装取消功能
    fnByDebounce.cancel = function (){
        if(timer) clearTimeout(timer);
        timer = null; //重置
        isInvoke = false;
    };

    return fnByDebounce;
}