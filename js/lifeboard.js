'use strict';

function LifeBoard(options) {
    // Set grid size
    this.gridSize = options.gridSize || 100;
    
    // density goes from 0.5 to 1
    var density = options.density || 1;
    density = (density + 1) * 0.5;
    
    var randomFill = (options.randomFill === undefined) ? true : options.randomFill;
    
    // Set Cell matrix
    this.cells = [];
    for (var i = 0; i < this.gridSize; i++) {
        this.cells[i] =[];
        for (var j = 0; j < this.gridSize; j++) {
            this.cells[i][j] = randomFill ? Math.round(Math.random() * density) : 0;
        }
    }
    
    
}

LifeBoard.prototype.countNeighbors = function(x, y) {
    // Ensures that the cell x,y is not counted as neighbor
    var neighbors = -this.cells[x][y];
    
    // Count neighbors
    for (var i = x - 1; i <= x + 1; i++) {
        for (var j = y - 1; j <= y + 1; j++) {
            var isWithinCanvas = i >= 0 && i < this.gridSize && j >= 0 && j < this.gridSize;
            if(isWithinCanvas) {
                neighbors += this.cells[i][j];
            }
        }
    }
    return neighbors;
}

LifeBoard.prototype.evolve = function() {
    var nextGen = [];
    
    // Evolve to next generation
    for (var i = 0; i < this.gridSize; i++) {
        nextGen[i] = [];
        for (var j = 0; j < this.gridSize; j++) {
            nextGen[i][j] = this.countNeighbors(i, j);
            // nextGen[i][j] = (cell === 2 || cell === 3) ? 1 : 0;
        }
    }
    
    // Copy new generation to LifeBoard
    for (var i = 0; i < this.gridSize; i++) {
        for (var j = 0; j < this.gridSize; j++) {
            var neighbors = nextGen[i][j];
            this.cells[i][j] = (neighbors === 2 || neighbors === 3) ? 1 : 0;
        }
    }
}