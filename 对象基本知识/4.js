function hd(name, { sex : a, age :b }){
    //白话:数据解构打散复制给变量
    console.log(name,a, b)
}

hd( 'panyue', { sex: 'male', age: 21 })
