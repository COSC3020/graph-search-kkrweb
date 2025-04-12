# Search in Graphs

Recall the pseudocode for Depth-First Search:

Given a graph, a start node, and a node we're looking for:
- starting at the start node, while unvisited nodes remain
    - if current vertex $v$ is the node we're looking for, return it
    - mark $v$ as visited
    - for each edge $(v,w)$
        - recursively process $w$ unless marked visited

Implement the algorithm. You can choose any of the data structures we covered
(adjacency matrix or adjacency list) for the implementation. Your function
should return the list of nodes on the path from the start to the target (not
the list of nodes that you looked at during the search). If start and target are
the same, it should return a list with only that node. If there is no path from
the start to the target, it should return an empty list. Start with the template
I provided in `code.js` and test your new function.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

## Runtime Analysis

What is the worst-case big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

## Bonus

Implement and analyze breadth-first search.


//


Name: Kane Kriz

Start Date: 19 March 2025

Last Edited: 11 April 2025

Feedback Request 1 Date: 12 April 2025


//


Response: 


First, we can consider the step by step functionality of the implementation and associated necessary work.

The algorithm begins by initializing the `visitedNodes` tracking object.
This requires constant time to initialize.

The primary work for the implementation occurs in the recursive `findPath` function.

`findPath` contains the functionality of the implementation to process each node and its edges within an input graoh.

Considering vertices, `findPath` processes each vertex exactly once due to the visited node tracking mechanism.
The line `visitedNodes[currentNode] = true` ensures no vertex is processed more than once.

This action contributes $Θ(V)$, with V corresponding to the number of vertices.
This $Θ(V)$ work is due to each vertex being handled by the recursion once.

For each vertex processed, the algorithm examines all adjacent edges through the adjacency list iteration.
The loop `for(var i = 0; i < adjNodes.length; i++)` processes each undirected edge once.

This edge functionality contributes $Θ(E)$ work where E represents the number of edges.
This $Θ(E)$ work results from handling each edge once when visiting the vertex where it originates.
 
The neighbor check `if(!visitedNodes[nextNode])` executes in $Θ(1)$ time due to the object property lookup, and is thus irrelevant asymptotically relative to our already seen linear terms.

The work of the algorithm overall is thus the combination of $Θ(V)$ vertex handling work with $Θ(E)$ edge work.

In the worst case, the algorithm will visit every vertex and traverse every edge reachable from the start node, and each vertex and edge thus gets processed one time.

This results in an overall worst case complexity of $Θ(V + E)$ for the depth first implementation.



//



Response (Bonus):


First, we can consider the step by step functionality of the implementation and associated necessary work.

The breadth first search implementation begins by initializing the `visitedNodes` tracking object and `nodeQueue`.

This setup requires constant time to complete.

The primary work occurs in the `findPath_2` function, which implements the breadth first search functionality. 

The function processes nodes in queue order.

Alongside this, the traversal path is built utilizing parent pointers, via `parents`.

Considering vertices, `findPath_2` processes each vertex exactly once when it is dequeued.

The combination of `visitedNodes[currentNode] = true` and applicable `.shift()` and `.push()` queue management ensures no vertex is processed more than once. 

This vertex processing contributes $Θ(V)$ work where V is the number of vertices.

For each vertex processed, the algorithm examines all adjacent edges through the adjacency list iteration.

The loop `for(var i = 0; i < adjNodes.length; i++)` processes each edge exactly once when its origin vertex is dequeued.

This edge processing contributes $Θ(E)$ work where E is the number of edges.

The neighbor check `if(!visitedNodes[nextNode])` executes in constant time.

In the worst case, the algorithm must visit every vertex and traverse every edge reachable from the start node.

Due to this, the worst case complexity of the breath first implementation is $Θ(V + E)$.





//



Plagiarism Acknowledgement: I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.


Citations:

“Pseudocode for Breadth-First Search | CodingDrills.” Codingdrills.com, 2024, www.codingdrills.com/tutorial/introduction-to-graph-algorithms/bfs-pseudocode.

This psuedocode was intended for Java but conceptually it was still useful for logic help where applicable:
Shaddy. “Breadth First Search Is an Algorithm Technique for Traversing a Tree, It Is Opposite of DFS, in BFS All the Nodes at the next Depth Level Are Traversed at the Same Time It Is Similar to Flood Fill Techniques or Wave Motion, Where the Motion Is Parallel An.” Atechdaily.com, ATechDaily, 21 Apr. 2020, atechdaily.com/posts/Breadth-First-Search-Pseudocode-and-Program-in-Java. Accessed 12 Apr. 2025.
