//import { name, age, foo } from './foo.js'; //后续代码不会在这个之前运行完执行 同步代码

//异步导入 不会阻塞后续代码
import('./foo.js')
      .then( res => {
          //res instanceof Module
          console.log(res.name);
          console.log(res.age);
          res.foo();
      });


console.log('此时后续代码不会被阻塞');


//es11新增特性
//meta也是对象 meta.url代表你当前这个文件的路径
console.log(import.meta);