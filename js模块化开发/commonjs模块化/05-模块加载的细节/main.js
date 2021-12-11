console.log('main.js开始运行');

require('./foo') //模块在第一次被加载的时候，模块中的js代码会被执行一次
//缓存只会运行一次
// require('./foo');
// require('./foo');

//循环引用则是会采用dfs(深度优先遍历)运行模块内的代码

console.log('main.js后续运行');