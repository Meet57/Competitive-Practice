/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function (root) {
    var min = Infinity
    var lastNode = null

    inOrderTraversal = (node) => {
        if (node) {
            inOrderTraversal(node.left)

            if (lastNode != null) {
                min = Math.min(min, Math.abs(lastNode.val - node.val))
            }

            lastNode = node

            inOrderTraversal(node.right)
        }
    }
    
    inOrderTraversal(root)

    return min

};