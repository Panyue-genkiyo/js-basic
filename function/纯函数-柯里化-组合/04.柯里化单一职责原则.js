//在函数式编程中 ，我们其实往往希望一个函数处理的问题尽可能的单
//而不是将一大堆的处理过程交给一个函数来处理；

function add(x){
    //单依职责原则 让我们每一个函数处理问题尽可能的少
    x = x + 2;
    return function(y){
        y = y * 2;
        return function(z){
            z = z * z;
            return x + y + z;
        }
    }
}

console.log(add(1)(2)(3));


