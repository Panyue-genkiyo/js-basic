const data = {
    name: 'panyue',
    data:{
        title: 'js'
    }
};

//json是通用数据格式
let data_str = JSON.stringify(data); //把对象转换为json string格式
console.log(data_str, typeof data_str === 'string')

let data_obj = JSON.parse(data_str); //json字符串转换为对象
console.log(data_obj); //对象

//也可以转化为数组形式
let arr = [{
    name: 'py'
}, { 
    name: 'js'
}]; 

console.log(JSON.stringify(arr, null, 2)); //可以把该json字符串传递给后台
