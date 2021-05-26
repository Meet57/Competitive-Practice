/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// Recurssive In-order Traverse

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
    stack = []
    traverse(root)
    return stack
    function traverse(node) {
        if (node) {
            traverse(node.left)
            stack.push(node.val)
            traverse(node.right)
        }
    }
}

// Iterative In-order Traverse

/**
 * 
 * @param {TreeNode} root 
 * @return {Number[]}
 */
var inorderTraversal = function (root) {
    let curr = root, res = [], stack = []
    while (curr || stack.length) {
        while (curr) {
            stack.push(curr)
            curr = curr.left
        }
        curr = stack.pop()
        res.push(curr.val)
        curr = curr.right
    }

    return res
}