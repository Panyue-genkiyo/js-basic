class PYEventBus {
    constructor() {
        this.eventBus = {}
    }

    on(eventName, eventCallback, thisArg) {
        if (typeof eventName !== "string") {
            throw new TypeError("the event name must be string type")
        }

        if (typeof eventCallback !== "function") {
            throw new TypeError("the event callback must be function type")
        }

        let hanlders = this.eventBus[eventName]
        if (!hanlders) {
            hanlders = []
            this.eventBus[eventName] = hanlders
        }

        hanlders.push({
            eventCallback,
            thisArg
        })
        return this
    }


    once(eventName, eventCallback, thisArg) {
        if (typeof eventName !== "string") {
            throw new TypeError("the event name must be string type")
        }

        if (typeof eventCallback !== "function") {
            throw new TypeError("the event callback must be function type")
        }

        const tempCallback = (...payload) => {
            this.off(eventName, tempCallback)
            eventCallback.apply(thisArg, payload)
        }

        return this.on(eventName, tempCallback, thisArg)
    }

    emit(eventName, ...payload) {
        if (typeof eventName !== "string") {
            throw new TypeError("the event name must be string type")
        }

        const handlers = this.eventBus[eventName] || []
        handlers.forEach(handler => {
            handler.eventCallback.apply(handler.thisArg, payload)
        })
        return this
    }

    off(eventName, eventCallback) {
        if (typeof eventName !== "string") {
            throw new TypeError("the event name must be string type")
        }

        if (typeof eventCallback !== "function") {
            throw new TypeError("the event callback must be function type")
        }

        const handlers = this.eventBus[eventName]
        if (handlers && eventCallback) {
            for (let i = 0; i < handlers.length; i++) {
                const handler = handlers[i]
                if (handler.eventCallback === eventCallback) {
                    handlers.splice(i, 1)
                }
            }
        }

        if (handlers.length === 0) {
            delete this.eventBus[eventName]
        }
        return this;
    }
}


//测试代码
const eventBus = new PYEventBus()
eventBus.on("test", (...payload) => {
    console.log("test1", ...payload)
}).on("test", (...payload) => {
    console.log("test2", ...payload)
}).on("test", (...payload) => {
    console.log("test3", ...payload)
}).emit("test", "测试事件");

function hello(...payload){
    console.log('hello', payload, this.a);
}

function testOnce(...payload){
    console.log('testonce', payload, this.a);
}

console.log("==================");

eventBus.once('test', testOnce, {a: 2});


eventBus.on('test', hello, { a: 3 }).emit('test', 'hello panyue');
///解绑
eventBus.off('test', hello).emit('test', 'hello panyue');