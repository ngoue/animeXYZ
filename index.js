"use strict";

require('./index.css')

module.exports = function() {
    const container = document.createElement('div')
    container.id = 'animexyz-naruto'
    const img = document.createElement('img')
    img.src = 'https://raw.githubusercontent.com/ngoue/animeXYZ/main/naruto.gif'
    container.appendChild(img)
    document.body.appendChild(container)
    setTimeout(() => {
      container.remove()
    }, 500)
}
