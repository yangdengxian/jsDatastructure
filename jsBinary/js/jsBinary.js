module.exports = {
    BinaryTree: function() {
        /**
         * 节点
         * @param {*string} key 节点值
         */
        var Node = function(key) {
            this.key = key;
            this.left = null; //左节点
            this.right = null; //右节点
        };

        var root = null; //根节点
        /**
         * 添加子节点
         * @param {*} root  根节点
         * @param {*} newNodes 新节点
         */
        var insertChildNode = function(node, newNodes) {
            //如果新节点值小于老节点值，往左插入，否则往右插入
            if (newNodes.key < node.key) {
                if (node.left === null) {
                    node.left = newNodes;
                } else {
                    insertChildNode(node.left, newNodes);
                }
            } else {
                if (node.right === null) {
                    node.right = newNodes;
                } else {
                    insertChildNode(node.right, newNodes);
                }
            }
        };
        /**
         * 添加节点
         * @param {*} key 
         */
        this.insert = function(key) {
            var newNodes = new Node(key);
            if (root === null) {
                root = newNodes;
            } else {
                insertChildNode(root, newNodes);
            }
        };
    }
};