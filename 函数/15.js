//使用call和apply方法来实现属性的继承

function Request(){
    this.get = function(params){
        // console.log(Object.keys(params));
        let get = Object.keys(params).map(k => `${k}=${params[k]}`).join('&');
        this.url = `${this.url}?${get}`;
        console.log(this.url);
    }
}

function Article(){
    this.url = 'article/lists';
    //注意这里相当于给Article new出来的对象添加了一个get属性
    Request.call(this);
}

function User(){
    this.url = 'user/lists';
    //注意这里相当于给User new出来的对象添加了一个get属性
    Request.call(this);
}

let a = new Article();
a.get({
    id: 1,
    cat: 'js'
});
let b = new User();
b.get({
    id:2,
    role: 'admin'
});

