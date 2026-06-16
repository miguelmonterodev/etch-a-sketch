// Container Element
const container = document.querySelector('.container')

// Create a box
function createBox() {
    const box = document.createElement('div')
    box.classList.add('box')
    container.appendChild(box)
}

// Test
createBox()
document.querySelector('.box').style.width = "20px"