/*匿名函数和函数提升*/
// hd() error!!!

// console.log(hd); //undefined
/*匿名函数，匿名函数不会提升注意，即使改为var也不会有用*/
var hd = function(){
    console.log('tttt');
}

// show(); ok!!!
/*函数声明提升*/
function show(){
    console.log('show!!!');
}

show();

/*函数也是对象*/
console.log(typeof show === 'function'); //true
console.log(show instanceof Object); //true show函数的原型链上存在Object.prototype

let hhh = show; //引用类型赋值
hhh();

/**/
function sum(...args){
    //匿名函数的使用
    return args.reduce((sum, cur) => sum + cur);
}

console.log(sum(1,2,4,5,6,7)); //25