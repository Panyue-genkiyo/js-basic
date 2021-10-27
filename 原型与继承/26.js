/*面向对象多态*/

function User(){
    
}


User.prototype.show = function(){
    //这个this因为是动态的其实就有多态哪味了
    console.log(this.description());
}

function Admin(){
    
}

Admin.prototype = Object.create(User.prototype);

Admin.prototype.description = function(){
    return '管理员在此';
}

function Member(){
    
}

Member.prototype = Object.create(User.prototype);
Member.prototype.description = function(){
    return '我是会员'
}

function Enterprise(){
    
}

Enterprise.prototype = Object.create(User.prototype);
Enterprise.prototype.description = function(){
    return '企业账户'
}

for(const obj of [ new Admin(), new Member(), new Enterprise() ]){
        /*多态*/
        obj.show();
}