//节流函数的基本封装
//按照一定的频率来触发
function throttle(fn, delay, options = { leading: true, trailing: false }) {
    const { leading, trailing, resultCallback} = options;
    let lastTime = 0;  //闭包 //第一次默认会执行因为第一次是lastTime
    let timer = null;
    const fnByThrottle = function (...args){
        return new Promise((resolve, reject) => {
            //当事件触发时记录当前时间
            const curTime = Date.now()
            if(!lastTime && !leading) {
                //当你不希望第一次在这里执行节流函数的时候，你可以在第一次触发事件的时候将curTime和lastTime设置为同样的值
                lastTime = curTime;
            }
            //如果当前时间和上一次触发的时间差大于delay，则执行回调函数
            const remain = delay - (curTime - lastTime);
            if(remain <= 0){
                if(timer) {
                    clearTimeout(timer);
                    timer = null;
                }
                //如果当前时间和上一次触发的时间差大于delay，则执行函数
                const result = fn.apply(this, args);
                if(resultCallback) {
                    resultCallback(result);
                }
                resolve(result);
                //更新上一次触发的时间
                lastTime = curTime;
                return;
            }

            if(trailing && !timer) {
                //如果trailing为true，则在节流函数执行完毕后(超过剩余时间之后)，再次触发回调函数
                timer = setTimeout(() => {
                    timer = null;
                    lastTime = !leading ? 0: new Date().getTime();
                    const result = fn.apply(this, args);
                    if(resultCallback){
                        resultCallback(result);
                    }
                    resolve(result);
                }, remain);
            }
        })
    }

    //封装取消功能
    fnByThrottle.cancel = () => {
        if(timer){
            clearTimeout(timer);
            //重置
            timer = null;
            lastTime = 0;
        }
    }

    return fnByThrottle
}