export default class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    info(){
        console.log(`${this.name} is ${this.age} years old`);
    }
}

export let url = 'www.yahoo.com';