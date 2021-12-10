class PYError extends Error{
    constructor(errorMsg, errorCode) {
        super(errorMsg);
        this.errorCode = errorCode
    }
}

function foo(type){
    console.log('start running');
    if(type === 0){
        //抛出基本类型(很少用)
        // throw 'type error'

        //抛出对象类型信息(常见)
        // throw {
        //     name: 'TypeError',
        //     message: 'type error',
        //     errorCode:1001
        // }

        //创建一个错误类,返回该错误类的对象(更常见)
        // throw new PYError('type不能为0', 1001)

        //继承原生error
        // const pr = new PYError('type不能为0', 1001);
        // console.log(pr.name);
        // console.log(pr.stack); //调用栈
        // throw pr;

        //Error子类 RangeError,ReferenceError,SyntaxError,TypeError,URIError...

        //throw出异常之后的，后续的代码不会执行了，类似于return
    }

    console.log('end running');
}

foo(0);
console.log('后续的代码继续执行');