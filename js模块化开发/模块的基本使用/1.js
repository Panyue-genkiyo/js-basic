let title = 'hd';
let site = 'https://www.google.com.tw';

function show(){
    console.log(`this is show in 1 module, title: ${title}`);
}

//不导出(export)任何东西的话，这个模块就是私有的，无法被外界所使用
// 导出模块 
export {show} //这里导出的变量名在外界使用的时候是不能随便改名的