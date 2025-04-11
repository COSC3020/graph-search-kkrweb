// Kane Kriz
// UWYO COSC 3020 Algorithms
// Graph Search Exercise
// js exercise file
//
// 11 April 2025
//


//


/*
Provided:

starting at the start node, while unvisited nodes remain

    if current vertex v is the node we're looking for, return it
    mark v as visited
    for each edge ( v , w )
        recursively process w unless marked visited
*/


//


function depthFirstSearch(graph, startNode, targetNode) 
{
    var visitedNodes = {};

    function findPath(currentNode) 
    {
        if(currentNode == targetNode) 
        {
            return [currentNode];
        }
        
        visitedNodes[currentNode] = true;
        var neighbors;
        
        if(graph[currentNode] == undefined) 
        {
            neighbors = [];
        }
            
        else 
        {
            neighbors = graph[currentNode];
        }
        
        for(var i = 0; i < neighbors.length; i++) 
        {
            var neighbor = neighbors[i];
            
            if(!visitedNodes[neighbor]) 
            {
                var nodePath = findPath(neighbor);
                
                if(nodePath.length > 0) 
                {
                    var fullPath = [currentNode];
                    
                    for(var j = 0; j < nodePath.length; j++) 
                    {
                        fullPath.push(nodePath[j]);
                    }
                    
                    return fullPath;
                }
            }
        }
        
        return [];
    }
    
    return findPath(startNode);
}


//
