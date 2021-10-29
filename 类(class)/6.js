/*静态属性*/

// function Web(url){
//     this.url = url; ///属性属于对象
// }

// Web.url = 'www.google.com.tw'; ///静态属性

// console.log(Web); //[Function: Web] { url: 'www.google.com.tw' }

// let hd = new Web('www'); //Web { url: 'www' }

// console.log(hd);


class Request{
    host = 'panyue'; //注意这么定义依然是对象属性 与constructor中的属性初始话的属性本质一样
    static url = 'website.xxx.com'; //静态属性 //属于类本身只有一份
}


let obj = new Request();
console.log(obj);

console.log(Request); //[class Request] { url: 'website.xxx.com' }



