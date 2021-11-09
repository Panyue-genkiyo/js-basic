let hd = {
    name: 'panyue',
    year: 2021
}

console.log(Object.keys(hd)); //属性名
console.log(Object.values(hd)); //值
console.log(JSON.stringify(Object.entries(hd), null, 2)); //键值对

//for in
for(const key in hd){
    console.log(hd[key]);
}

//for...of 是操作迭代对象的
// for(const it of hd){
//     console.log(it); //报错 hd不是迭代对象
// }

let lessons = [{
    name: 'panyue', url: 'www.panyue.com',
    name: 'js', url:"www.keys.com"
}];

let ul = document.createElement('ul');
for(const lesson of lessons){
    let li = document.createElement('li');
    li.innerHTML =  `课程:${lesson.name}, 网址:${url}`;
    ul.appendChild(li);
}
document.body.appendChild(ul);


for(const p of lessons){
    console.log(JSON.stringify(p, null, 2)); //ok数组是迭代对象
}

for(const it of Object.keys(hd)){
    console.log(it); //ok hd.keys() //values() //entries()都是可迭代的
}

for(const [ key, value ] of Object.entries(hd)){
    console.log(`${key} ---- ${value}`);
}
