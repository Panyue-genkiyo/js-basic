//super关键字的原理分析

class User{
    show(){
        console.log(this.name); //保留了this
    }
}

class Admin extends User{

    constructor(name){
        super();
        this.name = name;
    }
    
   show(){
       super.show(); //调用父级的show方法 super关键字
       console.log('admin.show');
   }
}


let hd = new Admin('hd-admin');

hd.show();

//回顾经典__proto__问题 

//注意这下面的依然还是有问题
// let hd = {
//     name: 'hd.name',
//     show(){
//         //console.log(this);  //记住this永远指向正在调用该方法的对象，它不会“攀升”
//         console.log('hd.show');
//         console.log(this.name);
//     }
// }

// let py = {
//     __proto__: hd,
//     name:'py.name',
//     show(){
//         //this.show(); //试图通过这种方式去调用父级(hd)的show方法是不行的 this永远指向的是当前对象，这样会一直调用自身导致栈溢出
//         this.__proto__.show.call(this); //保证到了父级this还是子级py对象
//         console.log('py.show');
//     }
// }

// py.show(); 
