//和Map类型相似的另外一个数据结构称之为WeakMap，也是以键值对的形式存在的
//那么和Map有什么区别呢？
//区别一：WeakMap的key只能使用对象 ，不接受其他的类型作为key；
//区别二：WeakMap的key对对象想的引用是弱引用，如果没有其他引用引用这个对象，那么GC可以回收该对象；

const obj1 = {
    name: 'py'
}

const obj2 = {
    name: 'wustr'
}

const map = new Map();
//即使obj1 = null map也不会回收{name:'py'}因为map对该对象还存在引用
map.set(obj1,'aaa'); //现在对象{name:’py‘}存在两个引用指向它(obj1和这个map)

const weakMap = new WeakMap();
//注意当obj1 = null weakMap会回收{name:'py'}因为即使weakMap对该对象还存在引用但是由于是弱引用gc会忽视它回收原来的对象
weakMap.set(obj1,'bbb'); 

//方法 set get has delete(true or false) 没有size属性(undefined) 没有clear函数 也不能遍历
// weakMap.set(1,'aaa'); //error 只能对象作为key
weakMap.set(obj1,'ccc');  //后面覆盖前面的 weakMap.get(obj1) => ccc
console.log(weakMap); //注意weakMap是无法遍历,所以打印结果是WeakMap { <items unknown> }

// console.log(weakMap.forEach())  undefined; //weakMap是无法遍历的
