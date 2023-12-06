let arr = ['panyue', 'www.baidu.com'];

let [a, b, c = 'default'] = arr; //解构默认值

console.log(a, b, c)

let user = {
    name: 'panyue',
    url: 'www.baidu.com',
    title: '开源系统'
}

let { name, url, title = 'default' } = user //默认值

console.log(title)

function createElement(options = {}){
    //参数合并
    let { width=200, height=100, background='red' } = options; //你不给就用我的默认
    console.log(width, height, background);
    const div = document.createElement('div');
    div.style.width = width;
    div.style.height = height;
    div.style.backgroundColor = background;
    document.body.appendChild(div);
}


createElement({ width:300, height: 30 });




