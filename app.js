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
	insert(value){
		if(this.root === null){
			this.root = new AVLTreeNode(value);
		}
		const recursiveHelper = (node) => {
			if(value < node.value) {
				if(node.left === null) {
					node.left = new AVLTreeNode(value);
				}else{
					recursiveHelper(node.left);
				}
			}else if(value > node.value){
				if(node.right === null){
					node.right = new AVLTreeNode(value);
				}else{
					recursiveHelper(node.right);
				}
			}
		}
		recursiveHelper(this.root);
	}
}

const myTree = new AVLTree();

console.log(treeify.asTree(myTree, false));