class PriourityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(val, priority) {
        this.values.push({ val, priority })
        this.sort()
    }

    dequeue() {
        // console.log()
        return this.values.shift()
    }

    sort() {
        
        this.values.sort((a, b) => { a.priority - b.priority })
        // console.log(this.values)
        
    }
}


class WeightedGraph {
    constructor() {
        this.adjancencyList = {}
    }

    addVertex(vertex) {
        if (!this.adjancencyList[vertex]) this.adjancencyList[vertex] = []
    }

    addEdge(v1, v2, weight) {
        this.adjancencyList[v1].push({ node: v2, weight: weight })

        this.adjancencyList[v2].push({ node: v1, weight: weight })
    }


    Dijkstra(start, finish) {
        const nodes = new PriourityQueue()
        const distance = {};
        const previous = {};
        let smallest
        for (let vertex in this.adjancencyList) {
            if(vertex == start){
                distance[vertex] = 0
                nodes.enqueue(vertex, 0)
            }else{
                distance[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity)
            }
            previous[vertex] = null;
        }
        // console.log(previous)
        // console.log(distance)
        // console.log(this.adjancencyList)
        while(nodes.values.length){
            smallest = nodes.dequeue().val
            
            if(smallest == finish){
            
                
            }
            
            if(smallest || distance[smallest] != Infinity){
                for(let neighbour in this.adjancencyList[smallest]){
                    console.log(this.adjancencyList[smallest])
                    let nextNode = this.adjancencyList[smallest][neighbour]
                    console.log(nextNode)
                    
                     
                }
            }
        }
        
    }

}

let graph = new WeightedGraph()
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A","B", 4);
graph.addEdge("A","C", 2);
graph.addEdge("B","E", 3);
graph.addEdge("C","D", 2);
graph.addEdge("C","F", 4);
graph.addEdge("D","E", 3);
graph.addEdge("D","F", 1);
graph.addEdge("E","F", 1);


graph.Dijkstra("A", "E");
