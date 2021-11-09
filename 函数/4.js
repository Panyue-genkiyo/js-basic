/*立即执行函数*/
(function(){
    console.log(1111);
})();

/*解决同名冲突-->立即执行函数*/

(function(){
    ///作用域，在外面无法访问到
    //此时采用闭包的方式
    function sum1(){
       console.log('dddd');
    }
    /*浏览器环境下*/
    window.s1 = {
        sum1,
    }; //暴露
})(window)

s1.sum1()

/*块级作用域解决同名问题*/
{
    // let a = 'xxx'; //let const块级作用域
    // // var a = 'xxx';

    function js1(){
        console.log('js1');
    }
    /*浏览器环境下*/
    window.js_1 = {
        js1,
    }
}


console.log(a);

