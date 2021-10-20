//使用访问器批量设置属性
"use strict";

let web  = { 
    name: 'youtube',
    url : 'www.youtube.com',
    get site(){
      return `${this.name}---${this.url}`;
    },
    set site(value = `${name},${url}`){
        console.log(value);
        [this.name, this.url] = value.split(',');
    }
}


web.site = '开源中国,www.kaiyuan.com';
console.log(web);
console.log(web.site);