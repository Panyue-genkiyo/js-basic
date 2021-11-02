function ajax(url, callback) {
    // 创建XMLHttpRequest对象
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();
    xhr.onload = function () {
        if(this.status === 200){
            callback(JSON.parse(this.response));
        }else{
            console.log('加载失败');
        }
    }
}
