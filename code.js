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


function depthFirstSearch(graph, startNode, targetNode) //primary function for the exercise
{
    var visitedNodes = {}; //visited node tracking

    function findPath(currentNode) 
    {
        if(currentNode == targetNode) //base case, target found
        {
            return [currentNode];
        }
        
        visitedNodes[currentNode] = true;
        var adjNodes;
        
        if(graph[currentNode] == undefined) 
        {
            adjNodes = [];
        }
            
        else 
        {
            adjNodes = graph[currentNode];
        }
        
        for(var i = 0; i < adjNodes.length; i++) //cover all unvisited adjNodes
        {
            var nextNode = adjNodes[i];
            
            if(!visitedNodes[nextNode]) 
            {
                var nodePath = findPath(nextNode); //recursibe depth first as directed
                
                if(nodePath.length > 0) //if target found, build applicable path
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
        
        return []; //target not found
    }
    
    return findPath(startNode); //search start from startNode
}


//


function breadthFirstSearch(graph, startNode, targetNode) //bonus function
{
    var visitedNodes = {}; //visited node tracking
    var nodeQueue = [startNode]; //breaks w/o being initialized startNode?
    
    var parents = {}; //tried to implement this without explicitly declaring this and instead only trying to pass it (treating parents and parentNode as the same) into the internal recursive function, but that just ended up failing a bunch.
    parents[startNode] = null;
    
    function findPath_2(currentNode, parentNode) 
    {
        if(currentNode == targetNode) //base case, target found
        {
            var path = [currentNode];
            
            while(parents[currentNode] !== null) 
            {
                currentNode = parents[currentNode];
                path.push(currentNode);
            }
            
            return path.reverse();
        }
        
        visitedNodes[currentNode] = true;
        var adjNodes;
        
        if(graph[currentNode] == undefined) 
        {
            adjNodes = [];
        }
            
        else 
        {
            adjNodes = graph[currentNode];
        }
        
        //breath first logic
        for(var i = 0; i < adjNodes.length; i++) 
        {
            var nextNode = adjNodes[i];
            
            if(!visitedNodes[nextNode]) 
            {
                nodeQueue.push(nextNode);
                visitedNodes[nextNode] = true;
                parents[nextNode] = currentNode;
            }
        }
        
        //recursive handling for the nodeQueue
        if(nodeQueue.length > 0) 
        {
            var nextNode = nodeQueue.shift();
            var nodePath = findPath_2(nextNode, currentNode);
            
            if(nodePath.length > 0) //if target found
            {
                return nodePath;
            }
        }
        
        return []; //target not found
    }
    
    return findPath_2(startNode); //search start from startNode
}


//
