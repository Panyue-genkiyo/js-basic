const s1 = Symbol();
const s2 = Symbol();
const obj = {
    name: 'py',
    friend: {
        name: 'jack'
    },
    foo:function () {
        console.log('foo');
    },
    [s1]:"abc",
    [s2]: s2,
};

// obj.inner = obj; 循环引用下面的方式就会报错

const info = JSON.parse(JSON.stringify(obj)); //无法处理函数，symbol,数组，map，set等等 无法支持循环引用(报错)
info.friend.age = 20;
console.log(info);
console.log(obj);