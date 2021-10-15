

let hd = {

};

hd.name = 'panyue';
hd['age'] = 21

console.log(hd);

delete hd.name

console.log(hd);

console.log(hd.hasOwnProperty('name')); //不包含原型链 在自己身上
