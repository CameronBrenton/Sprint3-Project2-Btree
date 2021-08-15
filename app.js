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
		const recursiveHelper = (node) => {
			if(node === null) {
				return new AVLTreeNode(value);
			}else if(value < node.value) {
				node.left = recursiveHelper(node.left);
			}else if(value > node.value) {
				node.right = recursiveHelper(node.right);
			}else{
				throw new Error("Inserts into our AVLTree cannot be equal!")
			}
			
			if(nodeBalance(node) > 1) {
				return rotateLeft(node);
			}else if(nodeBalance(node) < -1) {
				return rotateRight(node);
			}
		}
		this.root = recursiveHelper(this.root);
	}
}

const myTree = new AVLTree();

function nodeHeight(node){
	if(node === null) {
		return -1;
	}else if(node.left === null && node.right === null){
		return 0;
	}else{
		return 1 + Math.max(nodeHeight(node.left), nodeHeight(node.right));
	}
}

function nodeBalance(node){
	return nodeHeight(node.left) - nodeHeight(node.right);
}

function nodeRotateLeft(node){
	if(node === null || node.right === null){
		return null;
	}
	const newRoot = node.right;
	node.right = newRoot.left;
	newRoot.left = node;
	return newRoot;
}

function nodeRotateRight(node){
	if(node === null || node.left === null){
		return null;
	}
	const newRoot = node.left;
	node.left = newRoot.right;
	newRoot.right = node;
	return newRoot;
}

myTree.insert(1);
myTree.insert(2);
myTree.insert(3);

console.log(treeify.asTree(myTree, true));
console.log(JSON.stringify(myTree, null, 2));
console.log(nodeHeight(myTree.root));
console.log(nodeBalance(myTree.root));

myTree.root = nodeRotateLeft(myTree.root);

console.log(treeify.asTree(myTree, true));
console.log(JSON.stringify(myTree, null, 2));
console.log(nodeHeight(myTree.root));
console.log(nodeBalance(myTree.root));