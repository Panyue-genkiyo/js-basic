class ParamError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ParamError';
    }
}

class HttpError extends Error {
    constructor(message) {
        super(message);
        this.name = 'HttpError';
    }
}

function ajax(url) {
    return new Promise(function(resolve, reject) {
        // 创建XMLHttpRequest对象
        if(!/^https?/i.test(url)){
            throw new ParamError('URL必须以http或https开头');
        }
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.send();
        xhr.onload = function () {
           if(this.status === 200){
               resolve(JSON.parse(this.response));
           }else if(this.status === 404){
            //    reject('加载失败');
            //  throw new HttpError('加载失败'); //这里抛出错误是不行的，因为这个错误是异步的，而不是同步执行的,在异步的回调函数中抛出错误无法被外界的promise的catch到
             reject(new HttpError('查询的用户不存在'));
           }
        }
        xhr.onerror = function(){
            reject(this);
        }
    });
}
