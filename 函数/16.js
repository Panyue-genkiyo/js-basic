//bind

function show(){
    console.log(this.name);
}

// console.log(show());

show.call({ name: 'hello' }); //立刻执行

//但是使用bind就是不是立刻执行的

show.bind({ name: 'hdms' })();

function a(){
   console.log('say hello!!!')   
}

// let b = a;

// console.log(a === b); //true

//但是
let b = a.bind(null); //复制一个新函数
b();

console.log(b === a); //false

//bind函数传递参数
function hd(a, b){
    console.log(this.f + a + b);
}

hd.call({ f:1 }, 1,1); //3
hd.apply({ f: 1 }, [1, 1]); //3

let hd_bind = hd.bind({ f:1 }, 1, 1); //绑定时传参数：列表与call的形式一样
//也可以调用时传参数
//但是存在优先级，如果绑定是传参数了则调用传的参数不起作用
hd_bind(3,4); //3 注意 

let hd_bind2 =  hd.bind({ f:1 });
hd_bind2(3,4); //8

let hd_bind3 =  hd.bind({ f:1 }, 1);
hd_bind3(3,4); //5 f=1 a=1 b=3注意 4被丢掉
  