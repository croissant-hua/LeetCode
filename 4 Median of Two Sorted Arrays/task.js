//找到两个排序数组的中位数。总运行时间复杂度为O(log (m+n))。
//可以假设num1和num2不能都为空


//定义栈，对两个数组进行存储，再求中位数
//一开始用的Set集合，但是Set集合自动过滤去重，对[1,1] ,[1,2]这种情况就不适应

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let stack = []; //定义栈
    let i, j, midian;
    let m = nums1.length,
        n = nums2.length;
    for (i = 0, j = 0; i < m; i++) {
        while (nums2[j] <= nums1[i] && j < n) {
            stack.push(nums2[j]);
            j++;
        }
        stack.push(nums1[i]);
    }
    while (j < n) {
        stack.push(nums2[j]);
        j++;
    }
    let len = stack.length;
    if (len % 2 === 0) {
        midian = (stack[len / 2] + stack[len / 2 - 1]) / 2
    } else {
        midian = stack[parseInt(len / 2)];
    }
    return midian;
};

var nums1 = [1, 3],
    nums2 = [2];

console.log(findMedianSortedArrays(nums1, nums2));