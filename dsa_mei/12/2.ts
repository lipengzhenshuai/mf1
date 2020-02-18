/**
 * 快速排序
 *  思路：
 *      将整个数组取中间点值，大于它的一组，小于它的一组
 *      对两个部分重复上面操作
 */

function partition(arr: number[], left: number, right: number) {

    let pivot = arr[Math.floor((left + right) / 2)];
    let i = left;
    let j = right;

    while (i <= j) {
        while (arr[i] < pivot) {
            i++;
        }
        while (arr[j] > pivot) {
            j--;
        }
        if (i <= j) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
            j--;
        }
    }
    return i;
}


function quick(arr: number[], left: number, right: number) {

    let index = partition(arr, left, right);

    if (left < index - 1) {
        quick(arr, left, index - 1);
    }

    if (index < right) {
        quick(arr, index, right);
    }

    return arr;
}

function quickSort(arr: number[]) {
    let len = arr.length;
    if (len < 2) return
    return quick(arr, 0, len - 1);
}


console.log(quickSort([1, 2, 3, 334, 12, 43, 222, 367]));
