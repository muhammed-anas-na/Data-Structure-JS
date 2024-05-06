class Graph{
    constructor(){
        this.adjecencyList = {}
    }

    addVertex(vertex){
        if(this.adjecencyList[vertex] == null){
            this.adjecencyList[vertex] = new Set();
        }
    }

    addEdges(vertex1,vertex2){
        if(this.adjecencyList[vertex1] == null){
            this.addVertex(vertex1)
        }
        if(this.adjecencyList[vertex2] == null){
            this.addVertex(vertex2);
        }
        this.adjecencyList[vertex1].add(vertex2);
        this.adjecencyList[vertex2].add(vertex1);
    }
    display(){
        for(let vertex in this.adjecencyList){
            console.log(vertex + '->' + [...this.adjecencyList[vertex]]);
        }
    }

    hasEdge(vertex1,vertex2){
        return (
            this.adjecencyList[vertex1].has(vertex2)&&
            this.adjecencyList[vertex2].has(vertex1)
        )
    }

    removeEdge(vertex1,vertex2){
        this.adjecencyList[vertex1].delete(vertex2);
        this.adjecencyList[vertex2].delete(vertex1);
    }

    removeVertex(vertex){ 
        if(this.adjecencyList[vertex] == null){
            return;
        }
        for(let adjecentVertex of this.adjecencyList[vertex]){
            this.removeEdge(vertex,adjecentVertex)
        }
        delete this.adjecencyList[vertex]
    }

    BFS(s)
{
    let visited = new Array(this.V);
    for(let i = 0; i < this.V; i++)
        visited[i] = false;
         
    let queue=[];
    visited[s]=true;
    queue.push(s);
         
    while(queue.length>0)
    {
        s = queue[0];
        console.log(s+" ");
        queue.shift();
        this.adj[s].forEach((adjacent,i) => {
            if(!visited[adjacent])
            {
                visited[adjacent]=true;
                queue.push(adjacent);
            }
        });
    }
}

}


let g = new Graph();
g.addVertex('A')
g.addVertex('B')
g.addVertex('C')
g.addEdges('A','B')
g.addEdges('B','C')
console.log(g.adjecencyList)