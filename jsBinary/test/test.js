// import BinaryTree from '../js/jsBinary'; //不支持语法
var BinaryTree = require("../js/jsBinary");

var nodeArray = [8, 3, 5, 4, 11, 9, 20];
var binaryTree = new BinaryTree.BinaryTree();
nodeArray.forEach(node => {
    binaryTree.insert(node);
});
console.log(binaryTree);