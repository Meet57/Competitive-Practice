const Queue = require('./Queue')

class Graph {
    constructor(noOfVertices) {
        this.noOfVertices = noOfVertices
        this.AdjList = new Map()
    }
    addVertex(v) {
        this.AdjList.set(v, [])
    }
    addEdge(v, w) {
        this.AdjList.get(v).push(w)
        this.AdjList.get(w).push(v)
    }
    printGraph() {
        console.log(this.AdjList)
        var get_keys = this.AdjList.keys()

        for (var i of get_keys) {
            var get_value = this.AdjList.get(i)
            var conc = ""

            for (var j in get_value) {
                conc += j + " "
            }

            console.log(i + " -> " + conc)
        }
    }
    bfs(startingNode) {
        var visited = {}
        var q = new Queue()

        visited[startingNode] = true
        q.enqueue(startingNode)

        while (!q.isEmpty()) {
            var getQueueElement = q.dequeue()

            console.log(getQueueElement)

            var get_List = this.AdjList.get(getQueueElement)
            // console.log(get_List);

            for (var i in get_List) {
                var neighbor = get_List[i]
                if (!visited[neighbor]) {
                    visited[neighbor] = true
                    q.enqueue(neighbor)
                }
            }
        }
    }
    dfs(startingNode){
        var visited = {}
        this.DFSUtil(startingNode, visited)
    }
    DFSUtil(vert,visited){
        visited[vert] = true
        console.log(vert)

        var get_neighbors = this.AdjList.get(vert)

        for (var i in get_neighbors){
            var neighbors = get_neighbors[i]
            if(!visited[neighbors]){
                this.DFSUtil(neighbors,visited)
            }
        }
    }
}
var g = new Graph(7);
var vertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

for (var i = 0; i < vertices.length; i++) {
    g.addVertex(vertices[i]);
}

g.addEdge('A', 'B');
g.addEdge('A', 'D');
g.addEdge('A', 'E');
g.addEdge('B', 'C');
g.addEdge('D', 'E');
g.addEdge('E', 'F');
g.addEdge('E', 'C');
g.addEdge('C', 'F');
g.addEdge('F', 'G')

g.printGraph();

console.log("BFS");
g.bfs('A');

console.log("DFS");
g.dfs('A');