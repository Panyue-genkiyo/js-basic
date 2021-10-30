/*在类中使用访问器*/

class Request{
    constructor(url){
        this.data = {}; //解决访问设置器的死循环问题的重要解决方式,将要设置的属性包装在一个对象里
        this.host = url;
    }

    /*访问器*/
    set host(url){
        if(!/^https?:\/\//i.test(url)){
            throw new Error('url must start with http:// or https://');
        }
        //this.host = value;//注意如果你在这里写上this.host = host会出现死循环
        this.data.host = url;
    }

    get host(){
        return this.data['host'];
    }
}

let hd = new Request('http://www.baidu.com');
console.log(hd);


hd.host = 'www.p.com';//error
