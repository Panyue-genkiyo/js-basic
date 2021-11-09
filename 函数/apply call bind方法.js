//apply call bind方法

function User(name){
    this.name = name;
    //这里如果你手动返回一个对象则会出现问题
    // return { name: 'hello p' };
}

let lis = new User('hi!!!'); // this ==> lis ===> { name: 'hi!!!' };
// console.log(lis);

let hd = {
    url: 'www.google.com',
}

User.call(hd, '开源'); //此时的this直接变为hd，并不是未加工的空！！！！注意， 直接改变了hd的结构
console.log(hd); 