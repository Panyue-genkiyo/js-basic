/*原型方法和对象方法优先级*/

let hd = {
    show(){
        console.log('hhhh')
    },
    render(){
        console.log('render in hd');
    }
};

// console.log(hd);
// console.dir(hd);
hd.__proto__.render = function(){
     console.log('hello!!!');
}


/*沿着原型链向上查找,自己有就用自己的，自己没有就去长辈那里找*/
hd.render(); /*render in hd*/
hd.show();  /*hhhh*/
hd.__proto__.render(); /*但是还是能够手动显示去调用原型上的方法 hello!!!*/

