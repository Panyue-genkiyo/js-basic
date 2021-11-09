let lessons = {
    site: 'www.google.com',
    lists: ['vue', 'react', 'angular'],
    show: function(){
       //1.解决:作用域链保留this
       //const self = this; //self没问题的
       //2.解决:map函数可以传递第二个值当做回调函数的this
       return this.lists.map(function(l){
           //此时注意在这里this就丢了，这就是普通函数和对象方法的区别
           //console.log(this); //炸了!!!
           //作用域链解决,但是注意一般this不会想上查找
        //    return `${self.site}---${l}`;
           return `${this.site}---${l}`;
       },this);
    }
}


console.log(lessons.show());