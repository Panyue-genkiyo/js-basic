/*in和hasOwnProperty属性检测的差异*/
let a = { url: 'www.google.com' };
let b = { name: 'py' };
// Object.prototype.web = 'web learning is so funny';
// console.log("url" in a); //in除了检测自身也还会检测原型链 true
// console.log("web" in a); //true

Object.setPrototypeOf(a,b);

console.log("name" in a); //true

//只想检测当前对象时我们可以换成hasOwnProperty
console.log(a.hasOwnProperty("url"));//true
console.log(a.hasOwnProperty('name'));//false,不会去检查原型链

for(let k in a){
    if(a.hasOwnProperty(k)){
            console.log(`k:${k}, v:${a[k]}`);
    }
}