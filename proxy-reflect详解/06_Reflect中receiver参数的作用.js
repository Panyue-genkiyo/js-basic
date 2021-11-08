//js
const obj = {
    _name: 'hello', //默认它为私有属性，虽然依旧可以访问
    get name(){
        return this._name;
    },
    set name(newValue){
        this._name = newValue;
    }
}

//对上述对象去做监听
const objProxy = new Proxy(obj,{
    get(target, key, receiver){
        //receiver其实是创建出来的代理对象
        console.log(receiver === objProxy); //true;
        console.log(`get: ${key}`);
        //如果你在reflect中传递了receiver(代理对象),则在这个例子当中他就会把receiver当做this传到你上面的get name访问器中
        //那就是第一次name被访问是时，回来到该拦截器，而是_name被访问时一样会来到该拦截器 get name(){return this._name //this === objProxy}} 
        return Reflect.get(target, key, receiver);
    },
    set(target, key,newValue,receiver){
        console.log(`set------- ${key}`);
        Reflect.set(target, key, newValue, receiver);
    }
});

objProxy.name = 'py'; //set
console.log(objProxy.name); //get
