const handleKeyEvent = (event) => {
    if (event.keyCode >= 37 && event.keyCode <= 40) {
        handleDirectionKeysEvent(event.keyCode)
    } else {
        handleOtherKeysEvent(event.keyCode)
    }
}