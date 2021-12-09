//打开数据和数据库建立链接
const dbRequest = indexedDB.open('py', 1); //不存在则创建，存在则直接打开这个数据库
dbRequest.onerror = (err) => {
    console.log(`数据库打开失败：${err}`);
}

let db = null;
//数据库连接成功时
dbRequest.onsuccess = (e) => {
    db = e.target.result;
}

//第一次打开或者发生版本更新时会触发该回调函数
dbRequest.onupgradeneeded = (e) => {
    const db = e.target.result;
    //创建存储存储对象
    db.createObjectStore("users", {
        keyPath:'id', //主键
    }); //类似于一张表
}

//测试类user
class User{
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
}

const users = [
    new User(1, '张三', 20),
    new User(2, '李四', 21),
    new User(3, '王五', 22),
]

const btns = document.querySelectorAll('button');

for(let i = 0; i < btns.length; i++){
    btns[i].onclick = function (){
        const transaction = db.transaction(['users'], 'readwrite');
        const store = transaction.objectStore('users'); //从上面事务中拿到users的这样一个存储对象
        switch (i){
            case 0:
                //添加数据
                for(const user of users){
                   const request = store.add(user);
                   request.onsuccess = () => console.log(`${user.name}添加成功`);
                }
                //本次事务执行完毕后，自动提交
                transaction.oncomplete = function (){
                    console.log('添加成功');
                }
                break;
            case 1:
                //通过主键查找数据 id
                // const request = store.get(2);
                // request.onsuccess = (e) => console.log(e.target.result);
                //查询所有数据
                store.openCursor().onsuccess = (e) => {
                    const cursor = e.target.result;
                    if(cursor){
                        console.log(cursor.value);
                        cursor.continue();
                    }
                }
                break;
            case 2:
                //更新数据
                // const updateRequest = store.get(2);
                // updateRequest.onsuccess = (e) => {
                //     const user = e.target.result;
                //     user.name = '李四修改';
                //     const updateRequest = store.put(user);
                //     updateRequest.onsuccess = () => console.log(`${user.name}更新成功`);
                // }
                //通过游标修改
                store.openCursor().onsuccess = (e) => {
                    const cursor = e.target.result;
                    if(cursor){
                        if(cursor.value.id === 2){
                            cursor.value.name = '李四修改test';
                            const updateRequest = cursor.update(cursor.value);
                            updateRequest.onsuccess = () => console.log(`${cursor.value.name}更新成功`);
                        }
                        cursor.continue();
                    }
                }
                break;
            case 3:
                //删除数据
                // const deleteRequest = store.get(2);
                // deleteRequest.onsuccess = (e) => {
                //     const user = e.target.result;
                //     const deleteRequest = store.delete(user.id);
                //     deleteRequest.onsuccess = () => console.log(`${user.name}删除成功`);
                // }
                // break;
                //通过游标删除
                store.openCursor().onsuccess = (e) => {
                    const cursor = e.target.result;
                    if(cursor){
                        if(cursor.value.id === 3){
                            const deleteRequest = cursor.delete();
                            deleteRequest.onsuccess = () => console.log(`${cursor.value.name}删除成功`);
                        }
                        cursor.continue();
                    }
                }
        }
    }
}