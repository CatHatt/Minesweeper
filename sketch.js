const canvas = {width: 4, height: 4}
const minefield = document.getElementById('minefield')
const minefieldContainer = document.getElementById('minefield-container')
let [spaceWidth, spaceHeight, cellsize] = getCanvasFullSize();

function setup() {
    createCanvas(cellsize*canvas.width, cellsize*canvas.height, minefield)
}

function draw() {
    drawBackground()
}

function getCanvasFullSize() {
    const minefieldRect = minefieldContainer.getBoundingClientRect()
    const width = minefieldRect.width
    const height = minefieldRect.height

    const cellsize = width < height ? width/canvas.width : height/canvas.height
    
    return [width, height, cellsize]
}

window.addEventListener('resize', () => {
    [spaceWidth, spaceHeight, cellsize] = getCanvasFullSize()
    createCanvas(cellsize*canvas.width, cellsize*canvas.height, minefield)
})

function drawBackground() {
    for (let i = 0; i < canvas.width*canvas.height; i++) {
        let color;
        if (!(canvas.width % 2) && (Math.floor(i / 4) % 2)) {color = i+1 % 2 ? 50 : 60} else {color = i % 2 ? 50 : 60}
        fill(color)
        noStroke()
        rect(((i % canvas.width+1)-1)*cellsize, Math.floor(i / 4)*cellsize, cellsize+10, cellsize+10)
    }
}