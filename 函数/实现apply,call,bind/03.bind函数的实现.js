//模拟原生bind函数
Function.prototype.myBind = function(thisArgs, ...argsArray){
     //获取真实需要被调用的函数
     let fn = this;
     //绑定this并做判断
     thisArgs = (thisArgs !== null && thisArgs !== undefined) ? Object(thisArgs) : (typeof window !== "undefined" ? window : global);
     
     return  (...args) => {
         thisArgs.fn = fn; //依旧是隐式绑定fn的this为thisArgs 
         //因为原生的bind函数传递参数的方式有多种，所以我们需要把传递的参数放到合并一个数组里面 并展开做为函数参数调用
         //let allArgs = argsArray.concat(args);
         let res = thisArgs.fn(...[...args, ...argsArray]); 
         delete thisArgs.fn;
         return res
     } 
}

function foo(){
    console.log('foo被执行', this);
}

function sum(num1, num2, num3, num4){
    console.log(num1,num2,num3,num4, this);
}

//原生bind函数参数传递的方式
// sum = sum.bind({text: 'hello javascript'}, 10,20,30,40);
// sum();

// sum = sum.bind({text: 'hello javascript'});
// sum(10,20,30,40);

// sum = sum.bind({text: 'hello javascript'}, 10,20);
// sum(30,40);


sum.myBind({text: 'hello javascript'}, 10,20)(30,40);