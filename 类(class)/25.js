//使用类增强内置类

class Arr extends Array {
   constructor(...args){
       super(...args);
   }    
   
   first(){
       return this[0];
   }

   max(){
       return this.slice().sort((a, b) => b - a)[0];
   }

   add(item){
       this.push(item);
   }

   remove(value){
       if(value) {
           let pos = this.findIndex(item => item === value);
           this.splice(pos, 1);
       };
   }

   toString(){
       return this.join(' - ');
   }
}

let arr = new Arr(1,3,4,34,-21);

console.log(arr);

console.log(arr.max());
console.log(arr.first());
arr.remove(4);

console.log(arr.toString());
