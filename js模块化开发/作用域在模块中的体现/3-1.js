import { qq_num } from '../3-2.js' //模块中互相引用
let py = 'py';
console.log(qq_num);
//模块互相的变量不能直接调用， 都存在自己各自的作用域，不导出将无法使用
