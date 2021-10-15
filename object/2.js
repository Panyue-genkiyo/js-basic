let hd = {
    name: 'panyue',
    lesson: {
        title: 'js'
    }
};

//结构复杂对象
let { name, lesson: { title: t } } = hd;

console.log(name, t);
