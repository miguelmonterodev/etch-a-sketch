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
     
    for(let i=0; i<parseInt(gridSize)**2; i++) {
        createBox()
        document.querySelectorAll('.box')[i].style.width = "20px"  // Add width to the boxes
    }
    
}
// Test
createGrid()
console.log(typeof(window.innerWidth))