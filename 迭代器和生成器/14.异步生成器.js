//对于大多数的实际应用程序，当我们想创建一个异步生成一系列值的对象时，我们都可以使用异步 generator。
async function* generateNumber(start,end){
   for(let i = start; i <= end; i++){
       await new Promise(resolve => setTimeout(resolve,1000));
       yield i; //学会这里相当于return Promise.resolve(i); 作为外层生成器的next方法的返回值
   }    
}



(async function(){
    let generator = generateNumber(2,10); //生成器
    // for await (var value of generator){
    //     console.log(value);
    // }
    let res = await generator.next();
    console.log(res); //{ value: 2,done: false }
})();


//异步可迭代对象要实现[Symbol.asyncIterator]
let range = {
    start: 1,
    end:5,
    async *[Symbol.asyncIterator](){
        for(let i = this.start; i <= this.end;i++){
            //模拟网络请求
            await new Promise(resolve => setTimeout(resolve,1000));
            yield i;
        }
    }
};

(async function(){
    // for await (let value of range){
    //     console.log(value);
    // }
    let iterator = range[Symbol.asyncIterator]();
    let res = await iterator.next(); //{value: 1,done: false}
    console.log(res);
})();
