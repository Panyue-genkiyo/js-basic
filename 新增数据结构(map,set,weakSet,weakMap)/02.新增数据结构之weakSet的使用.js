//weakSet的使用
//与set的区别
//1.weakSet的成员只能是对象，而不能是其他类型的值 
//2.WeakSet对元素的引用是弱引用，如果没有其他引用对某个对象进行引用，那么GC可以对该对象进行回收

const ws = new WeakSet();
// ws.add(1); //error只能存放对象类型

//对对象是一个弱引用
//这里的obj和其friend属性的对对象的引用都是强引用(strong reference)
//弱引用的时候 gc是不会去管有没有弱引用在指向这个对象的，一旦强引用被切断，gc会忽视若引用关系继续回收对象
let obj = {
    name: 'py', 
    friend:{
        name: 'lily'
    }
};

//当obj.friend = null, 那么obj.friend已经不再指向原来那个对象了，所以{name: 'lily'}会被gc回收
//当obj = null, 同理上面原来obj指向的对象也会被回收掉

//注意此时这个set对该obj对象的引用是弱引用
ws.add(obj); //弱引用
//此时如果你obj = null;那么obj原来指向的对象会被回收，虽然你这里weakSet指向了那个对象但是gc会忽略弱引用 直接回收该对象
const set = new Set();
//但注意这里obj = null，原来obj指向的对象不会被回收，因为set指向了那个对象(强引用)，所以set也不会被回收
set.add(obj); //强引用


//注意 add delete has 没有clear方法,不能遍历的forEach,也不能支持for of
//模拟weakSet应用场景
//需求我不允许现在使用其他非构造方法对象作为上下文传递到这个函数running中
const personSet = new WeakSet();
class Person{
    constructor(){
        //将每次创建的对象添加到weakSet中
        personSet.add(this);
    }
    running(){
        if(!personSet.has(this)){
            throw new Error('不能通过非构造方法创建出来的对象调用running方法');
        }
        console.log('running', this);
    }
}
const p = new Person();
//p = null 则weakSet中的p对象会被回收，而set做不到，这就是为什么使用weakSet的原因
p.running();
p.running.call({name:'hello'}); 


