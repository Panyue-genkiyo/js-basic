function foo(num1, num2){
   console.log(arguments); //类数组注意没有数组上的一些方法 不能直接map，forEach，reduce等
   
   //arguments转为数组
   //方式一:
   let newArr = [];
   for(let i = 0; i < arguments.length; i++){
       newArr.push(arguments[i]);
   }
   console.log(newArr);
 
   //方式二:
   //Array.from参数为类数组或可迭代的对象
   let newArr2 = Array.from(arguments);
   console.log(newArr2);

   //方式三:
   //在slice方法中其实就在遍历这里的类数组arguments(存在索引值和length属性,可迭代可遍历的对象),就类似于方式一的遍历返回新数组一样
   let newArr3 = Array.prototype.slice.call(arguments,1,3); //this为arguments
   //[].slice.call(arguments,1,3)
   console.log(newArr3);


   //方式四:
   //展开运算符 (也是遍历)
   console.log([...arguments]);
   
}

foo(1,3,5,6,7);

//解释数组原型方法slice
let names = ['abc', 'cba', 'nba'];
console.log(names.slice(1,2)); //['cba']
console.log(Array.prototype.slice.call(names, 1, 2)); //['cba']