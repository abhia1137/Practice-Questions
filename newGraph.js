class Graph {
    constructor() {
        this.adjancencyList = {}
    }

    adVertex(vertex) {
        if (!this.adjancencyList[vertex]) this.adjancencyList[vertex] = []
    }

    adEdge(v1, v2) {
        this.adjancencyList[v1].push(v2)
        this.adjancencyList[v2].push(v1)
    }

    removeEdge(v1, v2) {

        for (let i = 0; i < this.adjancencyList[v1].length; i++) {
            if (this.adjancencyList[v1].indexOf(v2) > -1) {
                this.adjancencyList[v1].splice(this.adjancencyList[v1].indexOf(v2), 1)
                break
            }

        }

        if (this.adjancencyList[v2]) {
            for (let i = 0; i < thlis.adjancencyList[v2].length; i++) {
                if (this.adjancencyList[v1].indexOf(v2) > -1) {
                    this.adjancencyList[v2].splice(this.adjancencyList[v2].indexOf(v1), 1)
                    break
                }
            }
        }

    };

    print() {
        let sum = 0
        for (let i = 0; i <= 10; i++) {
            if (i.toString(2).replace(/0/g, '').length >= 2 && i.toString(2).replace(/0/g, '').length / 2 == 1) {
                sum += i
                // console.log(i)
            }
        }
        let num = 32
        let length = Math.sqrt(num)
        let total = 1

        for (let i = 0; i < Math.floor(length); i++) {
            total = total * 2
        }
        if (total == num) {
            console.log('Yes')
        } else {
            console.log('No')
        }
        // console.log(num.toString(2), (num-1).toString(2))
        //  console.log(num & (num-1));   
        // console.log(Math.log(32) == Math.floor(Math.log(32)))

    }

    removeVertex(vertex) {
        for (let i = 0; i < Object.keys(this.adjancencyList).length; i++) {
            this.removeEdge(Object.keys(this.adjancencyList)[i], vertex)
            if (Object.keys(this.adjancencyList)[i] == vertex) {
                delete this.adjancencyList[Object.keys(this.adjancencyList)[i]]
            }

        }
    }


    DFSGraph(start) {
        const stack = [start];
        const result = [];
        const visited = {};
        let currentVertex
        visited[start] = true;

        while (stack.length) {
            currentVertex = stack.pop();
            result.push(currentVertex);

            this.adjancencyList[currentVertex].forEach(neighbour => {
                if(!visited[neighbour]){
                    visited[neighbour] = true        
                    stack.push(neighbour)
                }
            })
        }
        // console.log('fff',result)
    }

    BFSGraph(start){
        const queue = [start];
        const result = [];
        const visited = {};
        let currentVertex
        visited[start] = true;

        while (queue.length) {
            currentVertex = queue.shift();
            result.push(currentVertex);

            this.adjancencyList[currentVertex].forEach(neighbour => {
                if(!visited[neighbour]){
                    visited[neighbour] = true        
                    queue.push(neighbour)
                }
            })
        }
        console.log('fff',result)
    }
};

let add = new Graph()


add.adVertex('Gurgaon')
add.adVertex('Noida')
add.adVertex('Gaziabad')
add.adVertex('Delhi')
add.adVertex('Fazilka')


add.adEdge('Gurgaon', 'Noida')
add.adEdge('Gurgaon', 'Delhi')
add.adEdge('Gurgaon', 'Gaziabad')
add.adEdge('Noida', 'Fazilka')
add.adEdge('Fazilka', 'Gaziabad')
add.adEdge('Delhi', 'Fazilka')

add.BFSGraph('Noida')

