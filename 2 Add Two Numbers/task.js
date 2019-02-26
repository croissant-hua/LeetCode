// 注意：定义num1,num2时，要赋默认值，即num1=0,num2=0; 否则会出现NaN

// pow 方法 ：返回底表达式的指定次幂，返回base的exponent次幂
//Math.pow(base, exponent)

//用链表表示
//先声明一个Node类(链表中的节点)
function ListNode(val) {
    this.val = val; //当前节点的数据
    this.next = null; //下一个节点的数据，链表的尾元素指向一个null节点
}
//接着声明一个链表类LinkedList
function LinkedList(arr) {
    // this.length = 0; //表示链表的长度
    // this.head = new ListNode(0); //表示链表的头结点(第一个节点)

    var head = new ListNode(0); //定义头节点
    var curr = head; //当前节点(过渡节点)
    for (let i = 0; i < arr.length; i++) {
        curr.next = new ListNode(arr[i]);
        curr = curr.next;
    }
    return head.next; //返回整个链表
}

// 构造两个有序链表
var arr1 = [2, 4, 6, 8];
var arr2 = [1, 3, 5, 7];
var list1 = LinkedList(arr1);
var list2 = LinkedList(arr2);
console.log(list1, "22222222");
console.log(list2, "44444444444");


var addTwoNumbers = function(l1, l2) {
    let head = new ListNode(0), //定义头节点
        temp = 0;
    let currNode = head;
    let x = 0,
        y = 0,
        sum;
    while (l1 != null || l2 != null) {
        x = (l1 != null) ? l1.val : 0; //调用节点的val
        y = (l2 != null) ? l2.val : 0;
        sum = temp + x + y;
        currNode.next = new ListNode(sum % 10); //定义next节点
        temp = parseInt(sum / 10);
        currNode = currNode.next;
        if (l1 != null) l1 = l1.next;
        if (l2 != null) l2 = l2.next;
    }
    if (temp > 0) {
        currNode.next = new ListNode(temp);
    }
    return head.next;
};

console.log(addTwoNumbers(list1, list2)); //输出结果查看