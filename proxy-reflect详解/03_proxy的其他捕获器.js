//proxy

const obj = {
    name: 'py',  //数据属性描述符
    age:18
}
 
// Object.defineProperty(obj, '',{}) 变为访问数据描述符

//参数：目标对象(你要代理哪一个)，拦截器对象(3中方式)
//注意receiver参数 只有get和set捕获器才存在， has捕获器不会有这个参数
const objProxy = new Proxy(obj,{
    //获取值时的捕获器
    //目标对象,目标key
    get(target,key){
        console.log('get:',key)
        return target[key]
    },
    //设置值时的捕获器
    //目标对象,目标key,修改之后的newValue
    set(target,key,newValue){
        console.log('set:',key, newValue)
        target[key] = newValue;
    },

    //监听in的捕获器 has
    has(target,key){
       console.log('has:',key)
       return key in target;
    },

    //deleteProperty的捕获器 监听删除属性
    deleteProperty(target,key){
        console.log('delete:',key);
        delete target[key];
    }
});

//proxy一样可以去监听对象中的其他操作
console.log("name" in objProxy); //监听in操作 --> has捕获器 true


//delete删除属性
delete objProxy.name; //delete: name

//也改变原来的对象
console.log(obj); 
