/*方法重写与父级属性的访问*/

function User(){
    
}

User.prototype.show = function(){
    console.log('user.show');
}

User.prototype.site = function(){
    return 'www'
}

function Admin(){
    
}

Admin.prototype = Object.create(User.prototype);
Object.defineProperty(Admin.prototype,'constructor', {
    value: Admin,
    enumerable:false
});

//重写父类方法
Admin.prototype.show = function(){
    //调用父类的方法
    console.log(User.prototype.site() + ' admin.show')
}

let hd = new Admin();

hd.show();