
function Student(name,age){
    this.name = name;
    this.age = age;
}

function Teacher(){
    
}

const stu = new Student('py', 23); //Student类型
console.log(stu);
console.log(stu.__proto__ === Student.prototype); //true

//执行Student函数，但是创建出来的对象是Teacher类型
//参数为： 要执行的构造函数，参数，最终生成的对象的类型(新的构造函数);
const teacher = Reflect.construct(Student, ['py', 18], Teacher); //Teacher类型
console.log(teacher);
console.log(teacher.__proto__ === Teacher.prototype); //true