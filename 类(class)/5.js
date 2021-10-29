/*严格默认下运行*/

// "use strict";

// function show(){
//     console.log(this); //undefined
// }

// show();

// function User(){
    
// }

// User.prototype.show = function(){
//     function test(){
//         console.log(this); //严格模式下undefined
//     }

//     test();
// }

// let u = new User();

// u.show();

class User{
    show(){
      function test(){
         console.log(this); //class默认开启严格模式，这里是undefined
      }
      test();
    }
}

const u = new User();

u.show();


