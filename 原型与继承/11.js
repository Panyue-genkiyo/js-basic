/*使用call和apply借用原型链*/
let hd = {
    data: [1,3,5,6,7,3]
};

Object.setPrototypeOf(hd, {
    max(){
        return this.data.sort((a, b) => b - a)[0]; //求最大值
    }
});

console.log(hd.max()); //7 this === hd

let py = {
    lessons: {
        js: 97,
        node: 99,
        linux: 88
    },
    get data(){
        return Object.values(this.lessons);
    }
};
const maxScore = hd.max.apply(py); //call借用原型链的上的方法
console.log(maxScore);  //99