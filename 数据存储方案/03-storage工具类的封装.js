//localstorage和sessionStorage的封装

class PYCache{
    constructor(isLocal = true){
        this.storage = isLocal ? window.localStorage : window.sessionStorage;
    }
    //设置缓存
    saveItem(key, value){
        this.storage.setItem(key, value ? JSON.stringify(value) : null);
    }

    //获取缓存
    getItem(key){
        let value = this.storage.getItem(key);
        return value ? JSON.parse(value) : null;
    }

    //删除缓存
    removeItem(key){
        this.storage.removeItem(key);
    }

    //清空缓存
    clear(){
        this.storage.clear();
    }

    key(index){
        return this.storage.key(index);
    }

    get length(){
        return this.storage.length;
    }
}

let localCache = new PYCache();
let sessionCache = new PYCache(false);

export {
    localCache,
    sessionCache
}