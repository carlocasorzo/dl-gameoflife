'use strict';

function LifeCanvas(canvas, options) { // gridSize, canvasSize, lifeBoard) {
    this.canvas = canvas;
    this.gridSize = options.gridSize || 100;
    this.canvasSize = options.canvasSize || 500;
    this.cellSize = this.canvasSize / this.gridSize;
    this.context = canvas.getContext('2d');
    
    this.lifeBoard = new LifeBoard({
        density: options.density,
        randomFill: options.randomFill,
        gridSize: this.gridSize
    });
    
    this.canvas.setAttribute('width', this.canvasSize);
    this.canvas.setAttribute('height', this.canvasSize);
    this.context.fillStyle = 'green';
    
    this.paintCanvas();
}


LifeCanvas.prototype.paint = function(i, j) {
    var size = this.cellSize;
    this.context.fillRect(i * size, j * size, size, size);
}

LifeCanvas.prototype.paintCanvas = function() {
    this.context.clearRect (0, 0, this.canvasSize, this.canvasSize);
    for (var i = 0; i < this.gridSize; i++) {
        for (var j = 0; j < this.gridSize; j++) {
            if(this.lifeBoard.cells[i][j] === 1){
                this.paint(i, j);
            }
        }
    }
}

LifeCanvas.prototype.evolve = function() {
    this.lifeBoard.evolve();
    this.paintCanvas();
}