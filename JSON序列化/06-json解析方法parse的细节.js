const JSONString = '{"name":"panyue","age":21,"friends":[{"name":"test1","age":23},{"name":"test2","age":24}],"hobbies":["swimming","running","eating"]}';

const info = JSON.parse(JSONString);

//第二个参数代表如何转化
const info1 = JSON.parse(JSONString, (key, value) => {
    if (key === 'age') {
        return value - 1;
    }
    return value;
});

console.log(info1)