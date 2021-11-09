let names = ['a', 'b', 'c'];

//对数组做截取 slice splice
//slice只要相同的start和end，对同一个数组绝对是相同的输出
//此时slice不管在哪里被调用相同的参数，都会返回一个相同的输出，也不存在副作用(修改原数组，改变外部形参的值)
let newNames = names.slice(1, 2);
console.log(newNames);
//但注意原来的数组是不变的
console.log(names);

//splice也可以截取
let newNames2 = names.splice(2); //从2到最后
console.log(newNames2); //['c']
console.log(names); //['a', 'b'] 注意会修改原数组(副作用side effect) 此时splice就不是一个纯函数了


