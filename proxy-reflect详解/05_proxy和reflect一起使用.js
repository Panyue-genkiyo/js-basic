const obj = {
   name: 'py', 
   age: 21,
};

//reflect的目的只要是避免直接对原来的对象直接进行操作
const objProxy = new Proxy(obj, {
     get(target,key, receiver) {
          //注意不要在这里去对原来的对象直接进行操作的
          //return target[key]
          //reflect对象身上的方法与proxy是一一对应的
          console.log('get-------');
          return Reflect.get(target,key,receiver);
    },
     set(target,key,newValue,receiver) {
          //同理
          //target[key] = value
          console.log('set---------');
          let res =  Reflect.set(target,key,newValue,receiver); //会给你返回boolean值的true代表修改或新增成功，false代表修改或创建失败 
          console.log(`${res ? 'success': 'failed'}`);
     },
});

console.log(objProxy.name);
objProxy.name = 'py2';
console.log(obj.name); //改了之后，原来的对象也改了
