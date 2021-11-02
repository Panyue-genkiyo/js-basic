//json转化为js可操作类型
let h = {
    title: 'learning js', 
    url: 'www.learning-js.com',
    teacher: {
        name: 'py-test'
    },
};


//压缩为json字符串格式
let json = JSON.stringify(h, null, 2);
console.log(json); //json格式

//解析为js可操纵对象
let obj = JSON.parse(json, (key, value) => {
    // console.log(`${key}, ${value}`);
    if(key === 'title') value = `happy ${value}`;
    return value
});
console.log(obj.title); 


