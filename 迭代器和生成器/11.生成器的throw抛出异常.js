function *foo(){

    console.log('function start!');

    const v1 = 200;
    try{
       yield v1;
    }catch(e){
       console.log(`error,${e}`);
       yield 'abd';
    }
    
    const v2 = 300;
    yield v2;

    console.log('function end!');

}

const generator = foo();

console.log(generator.next());
console.log(generator.throw('error'));//抛出异常 这样的话在上一次yield的时候就会抛出异常，不捕获的话代码就down掉，捕获就进入catch。返回yield后的表达式的值{value: 'abd', done: false}

//捕获了异常，生成器函数就可以就继续执行了
