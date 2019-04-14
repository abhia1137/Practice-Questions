class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = []
        }

    }
    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2)
        this.adjacencyList[v2].push(v1)
    }

    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v != vertex2

        )
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v != vertex1
        ) 
    };

    removeVertex(vertex) {
        while (this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop()
            this.removeEdge(vertex, adjacentVertex)
        }
    }
    print() {
        console.log(this)
    }
}

let g = new Graph()

g.addVertex('India')
g.addVertex('Irak')
g.addVertex('America')
g.addEdge('India', 'America')
g.addEdge('America', 'India')
// g.removeEdge('India', "America")
g.removeVertex('India')
g.print()


let arr = [{ a: 'a' }, { b: 'b' }, { c: 'c' }, { d: 'd' }]
arr.filter(v => console.log(v))



// O