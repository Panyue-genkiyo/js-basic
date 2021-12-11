const info =  {
    name:'py',
    age:21,
    foo:function (){
        console.log('foo');
    }
}

setTimeout(() => {
    info.name = 'py.set'
},1000)

module.exports = info;

const obj1 = {
    name: 'obj1',
}

const obj2 = obj1;

function foo(){
    return obj2;
}

const obj3 = foo();

//obj1 obj2 obj3三个是一个同一个对象引用 就类似于这样的道理


