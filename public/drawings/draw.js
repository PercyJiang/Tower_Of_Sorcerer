// configs
const PS = 32 // pic size
const left_shift = PS * 5
const status_left_dist = 70
let dictionaryPage = 0

const drawEverything = () => {
    drawStatusBar()
    if (displayDict === false) { drawMap() }
    else { drawDictionary() }
}

const refresh = () => {
    setInterval(() => {
        if (blink < 3) { blink++ }
        else { blink = 0 }
        drawEverything()
    }, 200)
}