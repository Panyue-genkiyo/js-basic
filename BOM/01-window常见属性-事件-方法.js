//1.属性
console.log(window.screenX, window.screenY);

// console.log(window.scrollX, window.scrollY);

//监听滚动 eventTarget继承而来
// window.onscroll = function () {
//     console.log(window.scrollX, window.scrollY);
// };

//内容innerHeight， 全部outerHeight
// console.log(window.outerHeight, window.innerHeight);


//方法
// const scrollbtn = document.querySelector('#scroll');
//
// scrollbtn.onclick = function () {
//     // scrollto
//     // window.scrollTo({
//     //     top: 2000
//     // });
//
//     // window.close();
//
//     // window.open('http://www.baidu.com', '_self');
// };


//常见的事件
window.onload = function (){
    console.log('window窗口加载完毕');
}

let hashchangeBtn = document.querySelector('#hc');

hashchangeBtn.onclick = function (){
    window.location.hash = 'ass'
}

window.onhashchange = function (){
    console.log('hash值改变');
}

//....
//查找api文档: https://developer.mozilla.org/zh-CN/docs/Web/API/Window