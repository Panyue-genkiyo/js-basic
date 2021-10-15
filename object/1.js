let arr = ['panyue', { job: 'fronted developer', salary: '50k' }];
// const [name, job] = arr;

const [, job] = arr; //忽略前一个值
//
// let web = { name: 'panyue', url: 'www.panyue.com' };
//
// let { url } = web; //只取一个值

let name = 'panyue', url = 'www.panyue.com';

let opt = {
    name,
    url
}  //简写

console.log(opt)

console.log(job)


