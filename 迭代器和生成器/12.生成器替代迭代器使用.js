//生成器本身就是一种特殊的迭代器
//生成器替代迭代器案例一
//迭代器写法
function createArrayIterator(arr){
    let index = 0;
    return {
        next(){
            //现在不需要考虑this
            return index < arr.length ? { done: false, value: arr[index++] } : {done:true}
        }
    }
}

const a = [1,3,4];
const iterator = createArrayIterator(a);
console.log(iterator.next()); //{done:false,value:1}

//生成器写法
function* createArrayGeneratorVersion(array) {
    // for(let i = 0 ; i < array.length ; i++) {
    //     yield array[i];
    // }
    //生成器替代迭代器
    // for(let item of array) {
    //     yield item;
    // }

    //甚至你还可以用yield*来使得代码更加简化
    //注意yield*后面跟一个可以迭代的对象，相当于把你这个对象中的每一个值迭代出来 每一次迭代都会返回一个值到你外面的next中作为你这次next的返回值
    yield* array;    
}

const generator = createArrayGeneratorVersion([1,2,3]);
console.log(generator.next()); //{done:false,value:1}


//生成器替代迭代器案例二
//迭代器写法
function createRangeIterator(start,end){
    let index = start;
    return {
        next(){
            return index < end ? { done: false, value: index++ } : {done:true}
        }
    }
}

const iterator1 = createRangeIterator(1,10);
console.log(iterator1.next()); //{done:false,value:1}

//生成器写法
function* createRangeGeneratorVersion(start,end) {
    let index = start;
    
    while(index < end){
        yield index++;
    }
    
}

const generator1 = createRangeGeneratorVersion(1,10);
console.log(generator1.next()); 

//生成器替代迭代器案例三
class ClassRoom{
    constructor(address, name, students){
        this.address = address;
        this.name = name;
        this.students = students;        
    }
    entry(newStudent){
        this.students.push(newStudent);
    }

    // [Symbol.iterator](){
    //     let index = 0;
    //     return {
    //         next:() => {
    //            return index < this.students.length ? { done: false, value: this.students[index++] } : {done:true} 
    //         },
    //         //监听迭代器的提前终止
    //         return:() => {
    //             console.log('迭代器提前终止了');
    //             return { done: true, value: undefined };
    //         }
    //     }
    // }

    //生成器写法
    *[Symbol.iterator](){
        yield *this.students;
    }

    //或者
    // [Symbol.iterator] = function*(){
    //     yield* this.students;
    // }
}

const c1 = new ClassRoom('03_25', '计算机科学与技术学院', ['张三', '李四', '王五']);
for(let item of c1){
    console.log(item); //张三 李四 王五
}
