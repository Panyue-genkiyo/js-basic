//String,Array,NodeList,Map,Set,Arguments...都是可迭代对象

//数组
const names = [1,2,3]; //数组本身就是可迭代对象
const iter = names[Symbol.iterator]();
console.log(iter.next());

//当然 for...of 可以遍历数组
// for(let name of names) {
//     console.log(name);
// };

//内置set和map也是可迭代对象
const set = new Set(['a', 'b', 'c']);
const iterSet = set[Symbol.iterator]();
console.log(iterSet.next()); // {value: 'a', done: false}

for(let item of set) {
    console.log(item); //a,b,c
}

const map = new Map();
map.set({name: 'py'}, {friends: ['jily']});
map.set([1], 'string');
const mapIter = map[Symbol.iterator]();
console.log(mapIter.next()); //{value: { { name: 'py' }, { friends: [Array] } }, done: false}

for(let [key,value] of map){
    console.log(key, value);
}

//函数中的类数组arguments也是可迭代对象
function foo(x, y, z){
   for(let param of arguments){
       console.log(param)
   }
}

foo(1,'hello', {name: 'py',age: 17});

