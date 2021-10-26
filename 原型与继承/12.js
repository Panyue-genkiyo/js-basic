/*优化借用方法*/
let hd = {
    data: [1,3,5,6,7,3]
};

//使用Math.max()
// console.log(Math.max.apply(null, hd.data)); //7
console.log(Math.max.call(null, ...hd.data));

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

console.log(Math.max.apply(null,py.data)); //99

