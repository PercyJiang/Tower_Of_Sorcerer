const drawMap = () => {
    let map = maps[player.floor]
    for (let i = 1; i <= 11; i++) {
        for (let j = 1; j <= 11; j++) {
            let idTerrain = map.terrainMap[(i - 1) * 11 + j - 1]
            let idUnit = map.unitMap[(i - 1) * 11 + j - 1]
            terrainDict[idTerrain].draw(i, j)
            unitDict[idUnit].draw(i, j)
        }
    }
    // draw the player
    drawImage(1, blink, player.face - 1, player.y, player.x)
}