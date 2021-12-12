define(function (require, exports, module){
    const { name, age, sum } = require('./foo');
    console.log(name, age);
    console.log(sum(1, 2));
})