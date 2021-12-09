//setItem getItem removeItem clear
//注意！！！存的值value会被转化成字符串
//同样适用于sessionStorage

//length
console.log(localStorage.length); //localstorage存储的数据个数
for(let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    console.log(`key:${key}, value:${localStorage.getItem(key)}`); //value
}
//key
console.log(localStorage.key(0)); //获取第一个key
//getItem
console.log(localStorage.getItem('name')); //获取指定key的value

//removeItem
localStorage.removeItem('name'); //删除指定key的value
//clear
localStorage.clear(); //清空localstorage