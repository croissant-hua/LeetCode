// 直接用target对原数组进行减法运算，找出合适的值，再在数组中查看是否存在该值。

// 数组的indexOf方法只能检测首次出现的位置索引。
// 当nums=[3,3]，target=6时，若没有判断条件不等于i，出错
var nums = [3, 3],
    target = 6;
var twoSum = function(nums, target) {
    let A, i, j = 0;
    console.log("00000");
    for (i = 0; i < nums.length; i++) {
        A = target - nums[i];
        if (nums.indexOf(A) > -1 && nums.indexOf(A) !== i) {
            return [i, nums.indexOf(A)];
        }
    }
};
console.log(twoSum(nums, target));