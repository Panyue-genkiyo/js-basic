//节流函数的基本封装
//按照一定的频率来触发
function throttle(fn, delay){
    let lastTime = 0;  //闭包 //第一次默认会执行因为第一次是lastTime
    const fnByThrottle = function (...args){
         //当事件触发时记录当前时间
        const curTime = Date.now();
        //如果当前时间和上一次触发的时间差小于delay，则返回
        if(curTime - lastTime >= delay){
            //如果当前时间和上一次触发的时间差大于delay，则执行函数
            fn.apply(this, args);
            //更新上一次触发的时间
            lastTime = curTime;
        }
    }
    return fnByThrottle
}