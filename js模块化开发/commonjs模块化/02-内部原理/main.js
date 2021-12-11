const py = require('./py.js');
//对之前暴露出来的对象都是同一个引用
console.log(py);

setTimeout(() => {
    console.log(py.name);
}, 2000);

