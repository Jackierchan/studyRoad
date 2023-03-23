var deepestLeavesSum = function (root) {
	// 新建一个map，来保存每一层的和。
	let m = new Map();
	let maxLen = 0; // 记录最深的一层

	travarse(root, 0);
	function travarse(node, level) {
		if (!node) {
			return;
		}
		travarse(node.left, level + 1);
		travarse(node.right, level + 1);
		if (!m.has(level)) {
			m.set(level, node.val);
		} else {
			m.set(level, node.val + m.get(level));
		}

		maxLen = Math.max(level, maxLen);
	}
	// console.log(m);
	// 输出最高一层的和
	return m.get(maxLen);
};