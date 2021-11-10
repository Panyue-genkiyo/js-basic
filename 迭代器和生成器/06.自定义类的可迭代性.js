
//将类对象配置为可迭代对象
// class Person{
   
// }

// const p1 = new Person();

class ClassRoom{
    constructor(address, name, students){
        this.address = address;
        this.name = name;
        this.students = students;        
    }
    entry(newStudent){
        this.students.push(newStudent);
    }

    [Symbol.iterator](){
        let index = 0;
        return {
            next:() => {
               return index < this.students.length ? { done: false, value: this.students[index++] } : {done:true} 
            },
            //监听迭代器的提前终止
            return:() => {
                console.log('迭代器提前终止了');
                return { done: true, value: undefined };
            }
        }
    }
}

const c1 = new ClassRoom('03_25', '计算机科学与技术学院', ['张三', '李四', '王五']);

for(const stu of c1){
    console.log(stu); 
    if(stu === '李四') break;
}
