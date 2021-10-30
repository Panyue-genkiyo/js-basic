/*属性的保护*/

class User{
    // 私有属性默认命名规范 r
    _url = 'www.google.com'; //人为去遵守，下划线，没有“惩罚措施“ 
   constructor(name){
       this.name = name;
   }   
 
   set url(url){
       if(!/^https?:/i.test(url)){
          throw new Error('url must start with http:// or https://');
       }
       this._url = url;
    }
}

let hd = new User('hd');
 
hd.name = 'py'; //默认在外部可以随意修改

//但注意此时仍然可以在类外刻意的修改私有属性
// hd._url = 'hello';

//使用this.url; 

console.log(hd);
