
//this问题
let obj = {  
    username:  'hdm',
    //对象属性称作方法
    show(){
        console.log(this); //当前对象 ==> obj
        
        let that  = this; //闭包解决作用域问题

        function render(){
            //普通的函数都会有自己的this 除了箭头函数即没有自己的this， 也没有自己的arguments
            // console.log(this); //this ==> object global //在浏览器环境下就是window
            console.log(that.username);
        }

        render();

        return `my name is ${this.username}`;
    }
};

console.log(obj.show()); //this === obj

//全局对象 this === window


function User(name){
    this.name = name;
    this.show = function(){
        // function render(){
        //     // console.log(this); ///this一样会丢注意！！！
        // }
        // render();
        //换成箭头函数就全部都解决了
        const render = () => {
            console.log(this); //boom!! 解决！！箭头函数没有自己的this，在作用域上查找
        }
        render();
        return this.name;
    }
}

let u =  new User('lis'); //this === u
console.log(u.show())
