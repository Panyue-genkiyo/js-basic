/*使用symbol解决字符串耦合问题*/


// let user1 = '李四';
// let user2 = '李四'

let user1 = {
    name: '李四',
    key: Symbol()
}

let user2 = {
    name: '李四',
    key: Symbol()
}


/*一样无法解决重名冲突的问题*/
let grade = {
    [user1.key]: {
        js: 100,
        css: 89
    },
    /*后面覆盖前面的*/
    /*如果key是symbol的话就不会存在覆盖 因为不是全局的symbol永远不会相等*/
    [user2.key]:{
        js: 100,
        css:55
    }
}

console.log(grade);

console.log(grade[user1.key]);  //第一个李四的成绩