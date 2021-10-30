/*使用super访问父类方法*/

class Controller{
    sum(){
        //此时this是子类Lesson的实例对象
       return this.data.reduce((t,b)=>t+b.price, 0);
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
}


const data = [
    { name: 'js', price: 100 },
    { name: 'mysql', price: 212 },
    { name: 'vue.js', price: 98 }
];


let hd = new Lesson(data);
console.log(hd.info());

