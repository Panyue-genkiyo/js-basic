//情况一:直接查找node的核心模块
// const path = require('path'); //核心模块
// const fs = require('fs'); //

//情况二
//../ ./ /(直接写/代表根路径)
/**
 * 顺序(有后缀名 -> 文件， 无后缀名: 文件 -> 文件.js -> 文件.json -> 文件.node)
 * 找不到文件则当成文件夹处理:顺序: 文件夹/index.js -> 文件夹/index.json -> 文件夹/index.node
 * 如果都没找到，则会报错:file not found
 */
// const abc = require('./abc');
// console.log(abc.name);

//情况三:既不是路径，也不是核心模块 第三包 node_modules  //都没有找到的话同样报错 file not found
require('axios');


console.log(module.paths); //查看模块的搜索路径，按照这个顺序查找自下向上查找本层的node_modules