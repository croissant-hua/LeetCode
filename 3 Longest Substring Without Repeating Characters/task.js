//找到最长无重复字符的字符串
//1.考虑多种情况
//1）为空时  2）只有一个字符时  3）多个字符
//2. 当检测到重复字符时：考虑 i 的位置，应该是被重复字符的后一位，即（l+1）.


var lengthOfLongestSubstring = function(s) {
    let num = 0;
    let i = 0,
        j = 1;
    len = s.length;
    if (s === '') { //为空时
        num = 0;
    } else if (len === 1) { //只有一个字符时
        num = 1;
    } else {
        while (s[i] === s[j] || j < len) {
            if (s[i] === s[j]) {
                num = ((j - i) >= num) ? (j - i) : num;
                i++;
                if (i === j) j++;
            } else {
                if (i === (j - 1)) j++;
                l = i;
                while (l < j) {
                    if (s[l] === s[j]) {
                        num = ((j - i) >= num) ? (j - i) : num;
                        i = ++l;
                    } else {
                        l++;
                    }
                }
                if (j < len) j++;
            }
        }
        if (j >= len) num = ((j - i) >= num) ? (j - i) : num;
    }
    return num;
};

var st = "abdcd";
console.log(lengthOfLongestSubstring(st));

///改进:建立Set集合存放无重复字符串

//用Set集合的has方法判断是否有重复字符
//当出现重复字符时，开始字符位置(l)为(l++),即被重复字符的后一位

/*var lengthOfLongestSubstring = function(s) {
    var set = new Set();
    var res = 0;
    var l = 0;
    var r = 0;

    while (l <= r && r < s.length) {
        // console.log("~~", l, r, set);
        if (!set.has(s[r])) {
            set.add(s[r]);
        } else {
            while (s[l] != s[r]) {
                set.delete(s[l]);
                l++;
            }
            l++;
        }
        r++;
        // console.log("res",   l, r);
        res = Math.max(res, r - l);
    }

    return res;

};*/