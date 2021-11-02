//混合导出

export let site = {
    value: 'www.baidu.com',
    area: 'shanghai'
}; //导出变量  具名
export default function say() { //导出函数 默认
    console.log(site);
}



//也可以这么导出，say默认 site具名
// export { say as default, site }