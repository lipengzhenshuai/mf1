/**
 * 归并排序
 *  思路：
 *      将数组进行均分成两部分
 *      对前部分进行排序，对后半部分进行排序，合并数组
 *      上面这个操作是迭代的，直到子节点不能再分割
 */
function merge(left, right) {
    var i = 0;
    var j = 0;
    var result = [];
    while (i < left.length && j < right.length) {
        result.push((left[i] > right[j]) ? left[i++] : right[j++]);
    }
    return result.concat(i < left.length ? left.slice(i) : right.slice(j));
}
function mergeSort(arr) {
    var len = arr.length;
    if (len < 2)
        return arr;
    var middle = Math.floor(len / 2);
    var left = mergeSort(arr.slice(0, middle));
    var right = mergeSort(arr.slice(middle, len));
    return merge(left, right);
}
console.log(mergeSort([1, 2, 3, 4, 222, 33, 12, 3]));
