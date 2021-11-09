//对象形式定义函数

/*函数体形式定义参数 重复使用的代码封装*/
let fnc = new Function('title', 'console.log(title)');
fnc('hello js');

/*字面量*/
function py(tit){
    console.log(tit);
}

py('hello');

//函数表达式
//匿名函数
let pyt = function(){
    console.log('pyt')
};
pyt('hi');

/*函数封装为对象的method*/
let user = {
    //setUsername: function(){}
    name: null,
    setUsername(name){
       this.name = name;
    },
    getUsername(){
      return this.name;  
    }
}


user.setUsername('user1');
console.log(user.getUsername());
