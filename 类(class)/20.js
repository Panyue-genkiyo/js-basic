//重写父类方法


class Controller{
    sum(){
       return this.data.reduce((t,b)=>t+b.price, 0);
    }
    getByKey(key){
        return this.data.filter(i => i.name.includes(key));
    }
}


class Lesson  extends Controller{
    constructor(data){
        super();
        this.data = data;
    }

    info(){
        return {
            totalPrice: super.sum(),
            data:this.data
        }
    }

    //覆盖父类的方法
    getByKey(key){
        //子类有就不去碰父类
        return super.getByKey(key).map(item => item.name);
    }
}


const data = [
    { name: 'js', price: 100 },
    { name: 'mysql', price: 212 },
    { name: 'vue.js', price: 98 }
];


let hd = new Lesson(data);
console.log(hd.info());
console.log(hd.getByKey("js"));

