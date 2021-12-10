const jumpBtn = document.querySelector('#jump')

jumpBtn.addEventListener('click', function (){

    history.pushState({
        name:'py'
    },"", "./demo.html"); //注意这里跳转是不刷新网页的，不会向服务器去请求新资源 使路径发生变化，监听路径变化去加载新的组件

    console.log(history.state); //{ name: 'py' }

    //replaceState 替换之前的网页 不保留历史

});


// go back(go(-1)) forward(go(1))等等

//API查询: https://developer.mozilla.org/zh-CN/docs/Web/API/History_API