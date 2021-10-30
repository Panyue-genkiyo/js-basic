//mixin组合方式

let Tool = {
    max(key){
       return this.data.reduce((max, t) => t[key] > max ? t[key] : max, 0);
    }
}

let Arr = {
    count(key){
        return this.data.reduce((sum, t) => sum + t[key], 0);
     }
}

class Lesson{
    constructor(lessons){
        this.lessons = lessons;
    }

    get data(){
       return this.lessons;
    }
}

const data = [
    { name: 'js', price: 100 , click: 988},
    { name: 'mysql', price: 212, click:10000 },
    { name: 'vue.js', price: 98 , click:110000}
];

Object.assign(Lesson.prototype, Tool, Arr); //往lesson.prototype中压入tool工具类和Arr工具类 mixin混合模式

let hd = new Lesson(data);

console.log(hd.max('price')); //212
console.log(hd.max('click')); //110000

console.log(hd.count('price')); //410
console.log(hd.count('click')); //120988