//代理对数组元素的拦截
"use strict";
const lessons = [
    { 
      title: 'test1',
      category: 'xxx1'
    },
    { 
        title: 'test2',
        category: 'xxx2'
    },
    { 
        title: 'test3',
        category: 'xxx3'
    },
]


let proxy =  new Proxy(lessons, {
    //array代表原数组
    get(array, key){
        // console.log(array);
        // console.log(key); //你在外面使用proxy所处传进来的值
        const title = array[key].title;
        const len = 3;
        array[key].title = title.length > len ? title.substr(0, len)+'.'.repeat(3) : title;
        return array[key];
    }
})

console.log(proxy[2]);