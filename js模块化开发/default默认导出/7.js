class User{
    static render(){
        console.log('static render in user');
    }
}


//默认导出

// export default User;
//下面的也算是默认导出
//默认导出是唯一的，我们可以使用任何变量来接收
export { User as default }