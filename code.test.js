// Kane Kriz
// UWYO COSC 3020 Algorithms
// Graph Search Exercise - test code
// js test file
//
// 11 April 2025
//


//


//based formatting and setup similar to that of my dijkstra test code
//...which is yet to be approved yet so hopefully that doesn't bite me in the ***, ha.


//


const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');

function test() 
{

  
  //deleted original testGraph_1 for this
  //thats why it starts at 2

  
////

  
    var testGraph_2 = 
    {
        A: ['B', 'C'],
        B: ['A', 'C', 'D'],
        C: ['A', 'B', 'D'],
        D: ['B', 'C']
    };
    
    assert.deepStrictEqual(depthFirstSearch(testGraph_2, 'A', 'D'), ['A', 'B', 'C', 'D']);
    //  
    assert.deepStrictEqual(breadthFirstSearch(testGraph_2, 'A', 'D'), ['A', 'B', 'D']);


////
  
  
    var testGraph_3 = 
    {
        A: ['B'],
        B: ['A', 'C'],
        C: ['B'],
        X: ['Y'],
        Y: ['X'],
        Z: []
    };
    
    assert.deepStrictEqual(depthFirstSearch(testGraph_3, 'A', 'X'), []);
    assert.deepStrictEqual(depthFirstSearch(testGraph_3, 'X', 'Y'), ['X', 'Y']);
    //
    assert.deepStrictEqual(breadthFirstSearch(testGraph_3, 'A', 'X'), []);


////
  

    var testGraph_4 = 
    {
        A: ['B', 'C', 'D', 'E'],
        B: ['A', 'C', 'D', 'E'],
        C: ['A', 'B', 'D', 'E'],
        D: ['A', 'B', 'C', 'E'],
        E: ['A', 'B', 'C', 'D']
    };
    
    assert.deepStrictEqual(depthFirstSearch(testGraph_4, 'A', 'E'), ['A', 'B', 'C', 'D', 'E']);
    //
    assert.deepStrictEqual(breadthFirstSearch(testGraph_4, 'A', 'E'), ['A', 'E']);


////

  
    var testGraph_5 = 
    {
        A: []
    };
    
    assert.deepStrictEqual(depthFirstSearch(testGraph_5, 'A', 'A'), ['A']);
    assert.deepStrictEqual(depthFirstSearch(testGraph_5, 'A', 'B'), []);
    //
    assert.deepStrictEqual(breadthFirstSearch(testGraph_5, 'A', 'A'), ['A']);
    

////
  
  
    var testGraph_6 = 
    {
        A: [],
        B: [],
        C: [],
        D: [],
        E: [],
        F: [],
        G: [],
        H: []
    };
    
    assert.deepStrictEqual(depthFirstSearch(testGraph_6, 'A', 'H'), []);
    //
    assert.deepStrictEqual(breadthFirstSearch(testGraph_6, 'A', 'H'), []);


////

  
    var testGraph_7 = 
    {
        A: ['B'],
        B: ['C'],
        C: ['D', 'A'],
        D: []
    };
    
    assert.deepStrictEqual(depthFirstSearch(testGraph_7, 'A', 'D'), ['A', 'B', 'C', 'D']);
    //
    assert.deepStrictEqual(breadthFirstSearch(testGraph_7, 'A', 'D'), ['A', 'B', 'C', 'D']);

  
}


test();


//


