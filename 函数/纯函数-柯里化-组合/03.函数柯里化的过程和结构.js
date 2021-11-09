function add(x, y ,z){
    console.log(x + y + z);
}

// 函数柯里化转换

function sum(x){
    return (y) => {
        return (z) => {
            return x + y + z;
        }
    }
}

console.log(sum(10)(20)(30));

//一个函数处理一部分参数，剩余参数交个另外的函数去处理
//简化柯里化过程
let sum2 = x => y => z => x + y + z; //箭头函数
console.log(sum2(10)(20)(30)); //60