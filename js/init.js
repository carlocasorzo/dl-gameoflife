'use strict';

var canvas = document.getElementById('game-canvas');

var init = {
    gridSize: 100,
    canvasSize: 500,
    randomFill: true,
    density: 0.01
};



var lifeCanvas = new LifeCanvas(canvas, init);
                                
                                


