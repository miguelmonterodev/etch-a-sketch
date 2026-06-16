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

// Get random color
function randomColor() {
    let red = Math.floor(Math.random() * 256)
    let green = Math.floor(Math.random() * 256)
    let blue = Math.floor(Math.random() * 256)
    return `rgb(${red},${green},${blue})`
}

// Create grid with a width according to user input
createGrid()

// Add event listener setting a hover effect when mouse is over a box
for (let i=0; i<document.querySelectorAll('.box').length; i++) {
    document.querySelectorAll('.box')[i].addEventListener("mouseover", function() {
        document.querySelectorAll('.box')[i].style.backgroundColor = randomColor()

    })
}
