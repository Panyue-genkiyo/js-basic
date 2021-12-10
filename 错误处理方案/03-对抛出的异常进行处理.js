function foo(){
    throw new Error("foo err msg");
}

function bar(){
    //不处理异常的话，则继续将异常接着抛(在调用栈)，直到被捕获
    try{
        foo();
    }catch (e){
        console.log(`err: ${e.message}`);
    }finally {
        //不管异常发没发生，这里的代码一定会执行
        console.log("finally"); //取消连接...
    }
}

function test(){
    //在这里处理异常也是ok
    bar()
}

//同理
test();