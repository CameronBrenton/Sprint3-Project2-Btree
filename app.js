const treeify = require('treeify');

class AVLTreeNode {
	constructor(value, left = null, right = null) {
		this.value = value;
		this.left = left;
		this.right = right;
	}
}

let n = new AVLTreeNode(100);
let n2 = new AVLTreeNode(200, n);
let n3 = new AVLTreeNode(300, null, n2);

console.log(n);
console.log(n2);
console.log(n3);