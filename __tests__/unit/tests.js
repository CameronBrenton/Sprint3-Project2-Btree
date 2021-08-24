//const AVLTreeNode = require('../../routes/submit');
//const AVLTree = require('../../routes/submit');

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
				return nodeRotateLeft(node);
			}else if(nodeBalance < -1) {
				return nodeRotateRight(node);
			}else{
				return node;
			}
		}
		this.root = recursiveHelper(this.root);
	}
	search(value){
		const recursiveSearchHelper = (node) => {
			if(node === null) {
				return false;
			}else if(value < node.value){
				return recursiveSearchHelper(node.left);
			}else if (value > node.value){
				return recursiveSearchHelper(node.right);
			}else{
				return true;
			}
		}
		return recursiveSearchHelper(this.root)
	}
}

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
	return nodeHeight(node.right) - nodeHeight(node.left);
}

function nodeRotateLeft(node){
	if(node === null || node.right === null){
		return node;
	}
	const newRoot = node.right;
	node.right = newRoot.left;
	newRoot.left = node;
	return newRoot;
}

function nodeRotateRight(node) {
	if (node === null || node.left === null) {
		return node;
	}
	const newRoot = node.left;
	node.left = newRoot.right;
	newRoot.right = node;
	return newRoot;
}


describe('Test AVLTreeNode class', () => {
	it('Can be constructed with a given value', () => {
		let node = new AVLTreeNode(5)
		console.log(node);
		expect(node.value).toEqual(5);
	});


})

describe("Test AVLTree Inserts", () => {
	it('Can insert a node from a null AVLTree', () => {
		const tree = new AVLTree();
		tree.insert(5);
		expect(tree.root).not.toBe(null);
		expect(tree.root.value).toBe(5);
		expect(tree.root.left).toBe(null);
		expect(tree.root.right).toBe(null);
	})

	it('Can insert a new value in a non-null AVLTree', () => {
		const node = new AVLTreeNode(5);
		const tree = new AVLTree(node);
		tree.insert(6);
		expect(tree.root).not.toBe(null);
		expect(tree.root.value).toBe(5);
		expect(tree.root.left).toBe(null);
		expect(tree.root.right).not.toBe(null);
	})

})