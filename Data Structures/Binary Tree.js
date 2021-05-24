class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
    // val = () => this.value===undefined ? 0 : this.value
    // right = () => right===undefined ? null : right
    // left = () => right===undefined ? null : right
}

class BST {
    constructor() {
        this.root = null
    }
    
    insert(data) {
        let newNode = new Node(data)
        if (this.root === null) {
            this.root = newNode
        }
        else {
            this.insertNode(this.root, newNode)
        }
        // console.log(this.root.left,this.root.right,this.root.value)
    }

    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            // console.log(newNode.value)
            if (node.left === null) {
                node.left = newNode
            }
            else {
                this.insertNode(node.left, newNode)
            }
        }
        else {
            // console.log(newNode.value)
            if (node.right === null) {
                node.right = newNode
            }
            else {
                this.insertNode(node.right, newNode)
            }
        }
    }

    remove(data) {
        this.root = this.removeNode(this.root, data)
    }

    removeNode(node, key) {
        if (node === null) return null
        
        if (key < node.value) {
            node.left = this.removeNode(node.left, key)
            return node
        }
        
        else if (key > node.value) {
            node.right = this.removeNode(node.right, key)
            return node
        }

        else {
            if (node.left === null && node.right === null) {
                node = null
                return node
            }
            else if (node.left === null) {
                node = node.right
                return node
            }
            else if (node.right === null) {
                node = node.left
                return node
            }

            var aux = this.findMinNode(node.right)
            node.data = aux.data

            node.right = this.removeNode(node.right, aux.data)
            return node
        }
    }

    findMinNode(node) {
        if (node.left === null) return node
        return this.findMinNode(node.left)
    }

    getRootNode() {
        return this.root
    }

    search(node, key) {
        if (node === null) return null
        else if (key < node.value) return this.search(node.left, key)
        else if (key > node.value) return this.search(node.right, key)
        else return node
    }

    inorder(node) {
        if (node) {
            this.inorder(node.left)
            console.log(node.value)
            this.inorder(node.right)
        }
    }

    preorder(node) {
        if (node) {
            console.log(node.value)
            this.preorder(node.left)
            this.preorder(node.right)
        }
    }

    postorder(node) {
        if (node) {
            this.postorder(node.left)
            this.postorder(node.right)
            console.log(node.value)
        }
    }
}

var bst = new BST()

bst.insert(50)
bst.insert(30)
bst.insert(70)
bst.insert(20)
bst.insert(40)
bst.insert(60)
bst.insert(80)

const root = bst.getRootNode()

// bst.remove(20)

console.log(bst.search(root,30))

console.log("Inorder Traversal")
bst.inorder(root)
console.log("preorder traversal");
bst.preorder(root);
console.log("postorder traversal");
bst.postorder(root);
