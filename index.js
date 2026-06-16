// Container Element
const container = document.querySelector('.container')

// Create a box
function createBox(width) {
    const box = document.createElement('div')
    box.classList.add('box')
    container.appendChild(box)
}

// Prompt the user the size of the grid and create the square grid
function createGrid() {
    const gridSize = prompt("What's the size of the grid? Enter a number (example: 16")
    let width = window.innerWidth / parseInt(gridSize)
    for(let i=0; i<parseInt(gridSize)**2; i++) {
        createBox()
        document.querySelectorAll('.box')[i].style.width = width.toString() + "px"  // Add width to the boxes in pixels
    }
    
}
// Test
createGrid()
