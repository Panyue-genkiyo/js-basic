let site = 'www.google.com'; //导出变量 
function say() { //导出函数
    console.log('hello');
}

class User{
    static render(){
        console.log('static render in user');
    }
}

//具名导出


export {site ,User as user }; //导出也可以起别名