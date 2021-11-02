// import { site, url, Person } from './9.index.js'

// function say() { //导出函数
//     console.log(site);
// }

// class User{
//     static render(){
//         console.log(`static render in user, url,${url}`);
//     }
// }

// say();
// User.render();
// new Person("panyue", 21).info();

// import * as api from './9.index.js';
console.log(api);

import * as api from './9.index.js';
console.log(api.s9.site);
console.log(api.s9.url);
console.log(api.t9.url); //同名变量此时也不会冲突
new api.t9.default.prototype.constructor('panyue', 21).info();
api.test(); //ok!!



