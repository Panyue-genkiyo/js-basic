//weakMap使用场景 vue3响应式
let obj3 = {
    name: 'hello',
    age: 16
}

let obj4 = {
    address:'shanghai',
    name:'wanky'
}

function fn1(){
    console.log(obj3.name); //对obj3.name进行响应当obj3.name发生改变的时候会触发fn1
}

//使用weakMap和map来关联响应式数据和对其做出响应的函数 
///使用以下数据结构来关联
const wk = new WeakMap();
const obj3Map = new Map();
obj3Map.set('name', [fn1]);
//注意这里使用weakMap的原因是当我们的obj3被销毁的时候(obj3 = null)，我们希望obj3Map也会被销毁。(弱引用) 但使用map无法达到这一效果
wk.set(obj3,obj3Map);

//3 当obj3.name发生改变时，找出依赖它的函数并执行
obj3.name = 'hello world';
const target = wk.get(obj3);
const fns = target.get('name');
fns.forEach(fn => fn());


// obj3 = null;
// console.log(wk.get(obj3)); //undefined;