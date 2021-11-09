//全局函数的特点

function hd(){
    console.log('what!!!')
}


hd();//在浏览器环境下window.hd也可以执行

var cms = function(){
    console.log('xxxx.com');
}

//window.cms(); cms()都行

//但是使用let进行声明就不行了，因为块级作用域
let sss = function(){
    conole.log('ssss');
}

/*函数尽量不要全局定义，尽量以模块的方式来管理*/
