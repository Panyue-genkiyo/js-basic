const data = [
    { name: 'js', price: 100 },
    { name: 'mysql', price: 212 },
    { name: 'vue.js', price: 98 }
];


class Lesson{
    constructor(data){
        this.data = data;
    }
    
    get name() { 
        return this.data.name;
    }

    get price() {
        return this.data.price;
    }

    static createBatch(data){
        return data.map(item => new Lesson(item));
    }

    static maxPrice(data){
        /*降序排列*/
        // return data.sort((a, b) => b.price - a.price)[0];
        return data.reduce((max, item) => {
            // console.log(max, item.price);
            return max > item.price ? max : item.price
        }, 0);
    }
    
    static total(data){
        return data.reduce((a, b) => a + b.price, 0);
    }
    
}


let lessons = Lesson.createBatch(data);
let max_price = Lesson.maxPrice(lessons);
let totalPrice = Lesson.total(lessons);
console.log(lessons);
console.log(max_price);
console.log(totalPrice);



