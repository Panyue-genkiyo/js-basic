"use strict";

let lesson = {
    lists: [
        { name: 'js', price: 100 },
        { name: 'mysql', price: 212 },
        { name: 'vue.js', price: 98 }
    ],
    get total(){
        return this.lists.reduce((sum, cur) => sum + cur.price, 0);
    }
}

console.log(lesson.total);

