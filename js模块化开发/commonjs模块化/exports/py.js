const name = 'py1';
const age = 18;

function sum(n1, n2) {
    return n1 + n2;
}

//源码逻辑
// module.exports = {};
// exports = module.exports;

//此时改了exports，也就改了module.exports，所以下面这种给exports塞属性的方式就等同于上面的方式(module.exports)

//第二种导出方式 间接修改module.exports
// exports.name = name;
// exports.age = age;
// exports.sum = sum;


//最终能导出的一定是module.exports
//下面这种是不可行的注意
/*exports = {
    name,
    age,
    sum
}*/

exports.name = name;
exports.age = age;
exports.sum = sum;

//一样没被导出，被覆盖了
// module.exports = {
//
// }


