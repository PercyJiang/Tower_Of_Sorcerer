window.onload = () => { init() }

// global variables
let ctx = 0
let blink = 0
let player = {}
let terrainDict = {}
let unitDict = {}
let maps = {}
let dialogs = {}
let displayDict = false
let sounds = []

const init = () => {
    ctx = document.getElementById('canvas').getContext('2d')

    setTitle()

    // set up configurations
    setPlayer()
    setTerrainDict()
    setUnitDict()
    setMaps()
    setDialogs()

    // refresh the map
    refresh()

    // background music
    setUpSoundEffect()

    // register keydown events
    document.addEventListener('keydown', (e) => { handleKeyEvent(e) }, false)
}

const setTitle = () => {
    ctx.font = '16px Comic Sans MS'
    ctx.fillStyle = 'black'
    ctx.textBaseline = 'middle'
    ctx.fillText('Tower of Sorcerer', 400 - 130, 10)
}