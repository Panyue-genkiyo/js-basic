//导出方式
// import { add, sub } from './math.js';
// import { typeFormat, priceFormat } from "./format.js";
// import { request } from './request.js';
//
// //统一导出
// export {
//     add,
//     sub,
//     typeFormat,
//     priceFormat,
//     request
// }


//方式二 导入之后马上导出
// export { add, sub } from './math.js';
// export { typeFormat, priceFormat } from "./format.js";
// export { request } from './request.js';

//方式三 导出所有
export * from './math.js';
export * from './format.js';
export * from './request.js';