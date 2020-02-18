/**
 * 实现一个算法，走一个台阶每次走1个或者走2个，走n个台阶都有什么走法
 *  思路：
 *      在第n个位置走台阶有两种走法：
 *          走一个和走两个
 *          如果是只有一个台阶，有一个方法
 *          如果是两个台阶，有两个方法
 */

function run(n: number): number {
    if (n === 1) return 1;
    if (n === 2) return 2;
    return run(n - 1) + run(n - 2);
}

console.log(run(1));
console.log(run(2));
console.log(run(3));
console.log(run(5));


/**
 *
 *  思路很理想，但是这个地方存在一个问题：如果递归的太多会出现性能问题
 *
 */


function run2(n: number): number {
    let arr: number[] = new Array(n + 1);
    arr[0] = 1;
    arr[1] = 2;
    for (let i = 3; i <= n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    return arr[n];
}

console.log(run2(1));
console.log(run2(2));
console.log(run2(3));
console.log(run2(5));
