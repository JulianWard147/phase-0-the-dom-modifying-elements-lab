// Write your code here!

// Remove main

document.querySelector('main').remove()

// add 'newHeader' that points to an <h1> node

const newHeader = document.createElement('h1')


// 'newHeader' id = 'victory'

newHeader.setAttribute('id', 'victory')

// 'newHeader' text "Julian is the champion"

newHeader.textContent = "Julian is the champion"

document.body.append(newHeader)

