const treeify = require('treeify');

class AVLTreeNode {
	constructor(value, left = null, right = null) {
		this.value = value;
		this.left = left;
		this.right = right;
	}
}
class AVLTree {
	constructor(root = null) {
		this.root = root;
	}
}

const tree = new AVLTree();

console.log(treeify.asTree(tree, false));