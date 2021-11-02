export let site = 'hello'; //导出变量 
export function say() { //导出函数
    console.log('hello');
}

export class User{
    static render(){
        console.log('static render in user');
    }
}

//具名导出

