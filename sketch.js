function setup() {
    createCanvas(400,400);
}

function draw() {
    background('lightblue');
    let colCount = 4
    let step = width/(colCount-1)
    for (let j = 0; j < colCount; j++) {
        for (let i = 0; i < colCount; i++) {
            let d = step
            let x = i * step
            let y = j * step
            circle(x, y, d)
        }
    }
}