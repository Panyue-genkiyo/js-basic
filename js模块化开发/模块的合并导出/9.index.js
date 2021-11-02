//导入模块并导出

// import { site, url } from './9-2.js'

// import Person from './9-3.js'

// export { site, url, Person }; //导入之后马上导出


// import * as s9 from './9-2.js'; //分组避免不同模块同名变量冲突
// import * as t9 from './9-3.js';

// export { s9, t9 };

//合并导入和导出
export * as s9 from './9-2.js';
export * as t9 from './9-3.js';
export { default as test }  from './9-4.js';

//下面是错误的合并导入导出的
// export test from './9-4.js';