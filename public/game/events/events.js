let direction = null, terrain = null, unit = null
let borderCheck = false
let move = () => { return }
let face = null

const handleKeyEvent = (event) => {
    if (event.keyCode >= 37 && event.keyCode <= 40) {
        handleDirectionKeysEvent(event.keyCode)
    } else {
        handleOtherKeysEvent(event.keyCode)
    }
}