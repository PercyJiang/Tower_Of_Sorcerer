const handleDirectionKeysEvent = (keyCode) => {
    switch (keyCode) {
        case 37: // left
            if (!displayDict) {
                direction = (player.y - 1) * 11 + player.x - 2
                borderCheck = player.x > 1
                move = () => { player.x-- }
                face = 2
            } else {
                dictionaryPage = dictionaryPage === 0 ? 2 : dictionaryPage - 1
            }
            break
        case 38: // up
            direction = (player.y - 2) * 11 + player.x - 1
            borderCheck = player.y > 1
            move = () => { player.y-- }
            face = 4
            break
        case 39: // right
            if (!displayDict) {
                direction = (player.y - 1) * 11 + player.x
                borderCheck = player.x < 11
                move = () => { player.x++ }
                face = 3
            } else {
                dictionaryPage = dictionaryPage === 3 ? 0 : dictionaryPage + 1
            }
            break
        case 40: // down
            direction = (player.y) * 11 + player.x - 1
            borderCheck = player.y < 11
            move = () => { player.y++ }
            face = 1
            break
    }
    if (direction !== null) {
        terrain = getTerrain(direction)
        unit = getUnit(direction)
        if (borderCheck && terrain.canPass()) {
            // check terrain
            terrain.effect()
            if (terrain.clear) {
                maps[player.floor].terrainMap[direction] = 0
            }
            // check unit
            if (unit.type === 'npc') {
                unit.effect()
            } else if (unit.canPass()) {
                unit.effect()
                maps[player.floor].unitMap[direction] = 0
                move()
            } else {
                Swal.fire({
                    title: 'Oops...',
                    text: `You are too weak to battle the ${unit.name}, you will die. `,
                    imageUrl: './images/psyduck2.gif',
                    imageWidth: 100,
                    imageHeight: 100
                })
            }
            direction = null
            move = () => { }
        }
        player.face = face
        checkAuto()
        drawEverything()
    }
}