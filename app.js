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
		const node = this.root;
		if(node.value < value){

		}else if(node.value > value){
			
		}
	}
}

const myTree = new AVLTree();

console.log(treeify.asTree(myTree, false));