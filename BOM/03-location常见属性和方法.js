//location也存在于window对象上

console.log(window.location); //location对象

console.log(location.href); //完整url地址

console.log(location.protocol); //协议


//pathname, host, hostname, port, search, hash....

//方法
// location.assign('https://www.baidu.com'); //自动跳转到指定url

// location.href = 'www.baidu.com'; //自动跳转到指定url

// location.replace('https://www.baidu.com'); //回不去了

// location.reload(true) ; //强制刷新 不走缓存(false则代表先检查缓存)


//API查询:https://developer.mozilla.org/zh-CN/docs/Web/API/Location
