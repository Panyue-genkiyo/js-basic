function  foo() {
    
}

//proxy监听调用方式
let funProxy = new Proxy(foo, {
    //参数:目标对象(函数)，this上下文，参数列表(数组)
    apply: function (target, thisArg, args) {
        console.log('apply方法被调用');
        //转发
        target.apply(thisArg, args);
    },

    //new操作符调用 监听
    //参数：目标对象，参数列表(数组)，这里newTarget是new操作符调用时传入的目标对象 这里和target骑士是一样的
    construct: function (target, args, newTarget) {
        console.log('construct方法被调用');
        //转发
        return new target(...args);
    },
});

funProxy.apply(null, [1, 2, 3]);
new funProxy('1', '2')