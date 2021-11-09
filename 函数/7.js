//剪头函数语法
const hd = () => 1 + 2;
console.log(hd());

let sum = [1,32,4,66].reduce((a, b) => a + b, 0)
console.log(sum);


//递归求和
const add = (...args) => {
    // if(args.length === 0) return 0;
    // //...新参收集变数组，...实参展开变列表
    // return args.pop() + add(...args); //递归方法

    return args.length === 0 ? 0 : args.pop() + add(...args);
}

console.log(add(1,2,3,4));

//递归打印
function star(sum){
    return sum ? document.write('★'.repeat(sum) + '<br/>') || star(--sum) : 0;
}

//递归附加参数
let les = [{
    title: 'xxx1', 
    click: 89
},{
    title: 'xxx2', 
    click: 45
},{
    title: 'xxx3', 
    click: 19
}];

// function change(lesson, num=100, i=0){
//     // if(i === lesson.length) return lesson;
//     // lesson[i].click += num;
//     // return change(lesson, num, ++i)

// }

les = les.map((l) => l.click+= 100);

console.table(les);