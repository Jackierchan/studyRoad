var deleteNode = function(node) {
    node.val = node.next.val;
    node.next = node.next.next;
};
//时间复杂度O(1),空间复杂度O(1)
