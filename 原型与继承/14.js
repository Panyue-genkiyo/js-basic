/*合理的构造函数方法声明*/

function User(name){
    this.name = name;
}

//方法没必要独立开辟空间去复制方法，因为方法基本都一样放在原型就ok
User.prototype.show = function(){
    console.log(this.name) //boom!!! 
}

/*或者这么写*/
// User.prototype = {
//     constructor:User,
//     show(){
//         console.log(this.name);
//     }
// }

let lisi = new User('李四');
let py = new User("py");

console.log(lisi);
lisi.show();
