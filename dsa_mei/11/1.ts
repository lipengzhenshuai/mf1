/**
 * 冒泡排序
 *  思路：
 *      从第一个元素开始，每两个元素进行比较
 *      最后一个肯定是最大的，或者最小的
 *      再次比较除了最后一个之外的元素
 *
 */

function bubbleSort(arr: number[]): number[] {
    let length = arr.length;
    if (length < 2) return;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
            }
        }
    }
    return arr;
}

// console.log(bubbleSort([1, 2, 3, 4, 6, 33, 11, 222, 34]));


/**
 * 插入排序
 *  思路
 *      将数组的每一个元素插入到数组中
 *      插入思路：
 *          从第二个元素开始遍历，和已经排序的元素的每一项进行比较，从后往前比，如果当前元素小于当前元素，移动元素位置，一个一个比较
 *
 */

function insertionSort(arr: number[]) {
    let len = arr.length;
    if (len < 2) return;
    for (let i = 1; i < len; i++) {
        let value = arr[i];
        let j = i - 1;
        for (; j >= 0; --j) {
            if (arr[j] > value) {
                arr[j + 1] = arr[j];
            } else {
                break;
            }
        }
        arr[j + 1] = value;
    }
    return arr;
}

// console.log(insertionSort([1,2,3,4,5,666,35,66]));



/**
 * 选择排序
 *  思路：
 *      每次从数组中找到最小的元素然后放到末尾
 */

function selectSort(arr: number[]) {
    let len = arr.length;
    if (len < 2) return;
    for (let i = 0; i < len; i++) {
        for (let j = i; j < len - 1; j++) {
            if (arr[j + 1] < arr[i]) {
                [arr[i],arr[j + 1]] = [arr[j + 1],arr[i]];
            }
        }
    }
    return arr;
}

console.log(selectSort([1, 2, 34, 5, 22, 444, 12]));
