'use strict';

function LifeBoard(gridSize, randomFill) {
    // Initialize cells.
    this.cells = [];
    for (var i = 0; i < gridSize; i++) {
        this.cells[i] =[];
        for (var j = 0; j < gridSize; j++) {
            this.cells[i][j] = randomFill ? Math.round(Math.random()) : 0;
        }
    }
    
    // Set grid size.
    this.gridSize = gridSize;
    
}