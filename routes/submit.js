const express = require('express');
const router = express.Router();
const treeify = require('treeify');

router.post('/', async function (req, res) {
	let results = await req.body.numberInput;
	results = results.split(',');
	let myTree = new AVLTree();
	for (let i = 0; i < results.length; i++) {
		myTree.insert(results[i]);
		console.log(results[i]);
	}
	res.send(JSON.stringify(myTree, true, 2));
	console.log(treeify.asTree(myTree, true));
});



		
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


if (module) {
    module.exports = router, AVLTree, AVLTreeNode;
}
