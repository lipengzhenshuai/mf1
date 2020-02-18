/**
 * 冒泡排序
 *  思路：
 *      从第一个元素开始，每两个元素进行比较
 *      最后一个肯定是最大的，或者最小的
 *      再次比较除了最后一个之外的元素
 *
 */
function bubbleSort(arr) {
    var _a;
    var length = arr.length;
    if (length < 2)
        return;
    for (var i = 0; i < length; i++) {
        for (var j = 0; j < length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                _a = [arr[j], arr[j + 1]], arr[j + 1] = _a[0], arr[j] = _a[1];
            }
        }
    }
    return arr;
}
// console.log(bubbleSort([1, 2, 3, 4, 6, 33, 11, 222, 34]));
/**
 * 插入排序
 *  思路
 *      将数组的每一个元素插入到新数组中
 *      插入思路：头开始遍历，如果元素小于（大于）某个值，将这个元素插入队列中，后面的元素往后移动
 */
function insertionSort(arr) {
    var len = arr.length;
    if (len < 2)
        return;
    for (var i = 1; i < len; i++) {
        var value = arr[i];
        var j = i - 1;
        for (; j >= 0; --j) {
            if (arr[j] > value) {
                arr[j + 1] = arr[j];
            }
            else {
                break;
            }
        }
        arr[j + 1] = value;
    }
}
// console.log(insertionSort([1,2,3,4,5,666,35,66]));
/**
 * 选择排序
 *  思路：
 *      每次从数组中找到最小的元素然后放到末尾
 */
function selectSort(arr) {
    var _a;
    var len = arr.length;
    if (len < 2)
        return;
    for (var i = 0; i < arr.length; i++) {
        for (var j = i; j < len - 1; j++) {
            if (arr[j + 1] < arr[i]) {
                _a = [arr[j + 1], arr[i]], arr[i] = _a[0], arr[j + 1] = _a[1];
            }
        }
    }
    return arr;
}
console.log(selectSort([1, 2, 34, 5, 22, 444, 12]));
