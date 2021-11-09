//weakMap使用场景 vue3响应式
const obj3 = {
    name: 'hello',
    age: 16
}

const obj4 = {
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
wk.set(obj3,obj3Map);

//3 当obj3.name发生改变时，找出依赖它的函数并执行
obj3.name = 'hello world';
const target = wk.get(obj3);
const fns = target.get('name');
fns.forEach(fn => fn());