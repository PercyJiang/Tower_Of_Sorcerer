// configs
const PS = 32 // pic size
const left_shift = PS * 5
const status_left_dist = 70
let dictionaryPage = 0

const drawEverything = () => {
    drawStatusBar()
    if (displayDict === false) { drawMap() }
    else { drawDictionary() }

    // dududu
    // let img = new Image()
    // img.src = 'images/elephant.png'
    // ctx.drawImage(img, 60 + blink * 320, 60, 320, 320, PS * 5 + left_shift, PS * 4, 120, 120)
}

const refresh = () => {
    setInterval(() => {
        if (blink < 3) {
            blink++
        } else {
            blink = 0
        }
        drawEverything()
    }, 200)
}