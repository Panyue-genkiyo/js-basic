define(function (require, exports, module){
    //吸取commonjs的优点
    const name = "py";
    const age = 21;
    const sum = (n1, n2) => n1 + n2;

    exports = module.exports = {
        name,
        age,
        sum,
    }
});