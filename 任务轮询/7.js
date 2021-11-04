//任务拆分为多个子任务

// function hd(){
//    for(let i = 0; i < num; i++){
//        count+=num--;
//    }
// }

// let num = 987654321;
// let count = 0

function hd(){
    for(let i = 0; i < 20000000; i++){
        if(num <= 0) break;
        count+=num--;
    }
    if(num > 0){
        //拆分任务，此时宏任务不影响我后面同步代码的执行
        //利用宏任务拆分复杂业务 不阻塞后续代码的执行
        console.log(num);
        setTimeout(hd);
    }else{
        console.log(count);
    }
 }
 
 let num = 987654321;
 let count = 0;

hd()
console.log('py test'); //此时注意前面的都是同步代码，会影响这行代码的输出