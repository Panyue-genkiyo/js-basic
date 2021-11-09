//json序列化和自定义json

let h = {
    title: 'learning js', 
    url: 'www.learning-js.com',
    teacher: {
        name: 'py-test'
    },
    //即自定义json的返回
    toJSON(){
        return {  
            //只返回两个字段
            title: this.title,
            teacher: this.teacher.name,
        }
    }
};


//自定义序列化
const json1 = JSON.stringify(h);
console.log(json1);


//json tojson
//第二个参数代表你要保留的属性，参数类型列表, 第三个参数缩进位
// let json1 = JSON.stringify(h, ["title", "url"], 2);
// console.log(json1);

// let arr = ['test1', 'test2']; 
// let json2 = JSON.stringify(arr, null , 2);
// console.log(json2);
