// console.log('xxxxxx');
class Lesson{
    #data = [];
    
    init(){
        this.#data = [{
            name: 'panyue',
            age: 21,
        }, {
           name:'hello',
           age:18
        }]
    }

    get data(){
      return this.#data
    }
}

const obj = new Lesson();
obj.init();
export { obj };