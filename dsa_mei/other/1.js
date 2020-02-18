/**
 * 实现一个算法，走一个台阶每次走1个或者走2个，走n个台阶都有什么走法
 */
function run(n) {
    if (n === 1)
        return 1;
    if (n === 2)
        return 2;
    return run(n - 1) + run(n - 2);
}
console.log(run(1));
console.log(run(2));
console.log(run(3));
console.log(run(5));
