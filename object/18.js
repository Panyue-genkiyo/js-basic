/**构造函数class语法糖使用访问器*/
"use strict";

//构造函数
// function User(name, age){
//     // this.age =  age;
//     // this.name = name;
//     //封装成私有属性
//     let data = {name, age}; //闭包
//     //定义当前对象的特征
//     Object.defineProperties(this, {
//        name:{
//            //访问器
//            get(){
//                return data.name;
//            },
//            set(value){
//              if(value.trim() === '' ||  value.length > 20) {
//                  throw new Errord('用户名不合法');
//              }
//              console.log(value+ '...set');
//              data.name = name;
//            }
//        },
//        age: {
//            get(){
//                return data.age
//             },
//            set(value){
//                console.log(value+ '...set');
//            }
//         }
//     });
// }

// let py = new User('py', 18);
// console.log(py.name);


//class使用访问器
const DATA = Symbol();
class User {
    constructor(name, age){
        this[DATA] = {name, age};
    }
    
    get name(){
        return  this[DATA].name;
    }
    set name(value){
      if(value.trim() === '' ||  value.length > 20) {
          throw new Errord('用户名不合法');
      }
      console.log(value+ '...set');
      this[DATA].name = name;
    }
    get name(){
        return this[DATA].age
     }
    set name(value){
        console.log(value+ '...set');
    }
}

const py = new User('py', 18);
//私有属性
console.log(py);
