class PYEventBus{

    constructor() {
       this.eventBus = {};
    }

    on(eventName, eventCallback, thisArg = null) {
        let handles = this.eventBus[eventName];
        if(!handles){
            handles = this.eventBus[eventName] = [];
        }
        handles.push({
            callback: eventCallback,
            thisArg: thisArg
        });
    }

    off(eventName, eventCallback) {
        let handles = this.eventBus[eventName];
        if(!handles){
            return;
        }
        for(let i = 0; i < handles.length; i++){
            if(handles[i].callback === eventCallback){
                handles.splice(i, 1);
                break;
            }
        }
    }

    emit(eventName, ...args){
        let handles = this.eventBus[eventName];
        if(!handles){
            return;
        }
        handles.forEach(handle => {
            handle.callback.apply(handle.thisArg, args);
        });
    }

}

const eventBus = new PYEventBus();


function eventCallback(payload){
    console.log('订阅事件abc1，收到消息：', payload);
    console.log(this); //this
}
//订阅事件
eventBus.on('abc', eventCallback , { name: 'py' });


eventBus.on('abc', function (payload){
    console.log('订阅事件abc2，收到消息：', payload);
    console.log(this); //this
} , { name: 'jk' });

//发布事件
eventBus.emit('abc', 'hello world'); //发送事件

//移除事件callback abc1
eventBus.off('abc', eventCallback);

console.log('===========================')
//发布事件
eventBus.emit('abc', 'hello world'); //发送事件