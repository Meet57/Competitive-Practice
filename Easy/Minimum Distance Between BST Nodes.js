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
 var minDiffInBST = function(root) {
    var min = Infinity
    
    const recurssion = (node) => {
        if(!node) return
        getMin(node.val,node.left)
        getMin(node.val,node.right)
        recurssion(node.left)
        recurssion(node.right)
    }
    
    const getMin = (val,node) => {
        if(!node) return
        min = Math.min(min,Math.abs(val - node.val))
        getMin(val,node.left)
        getMin(val,node.right)
    }
    
    recurssion(root)
    return min
}