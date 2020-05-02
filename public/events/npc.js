const checkAutoDoor = () => {
    let floor = player.floor
    switch (floor) {
        case 2:
            if (maps[floor].unitMap[33] === 0) {
                maps[floor].terrainMap[56] = 0
            }
            break
        case 7:
            if (maps[floor].unitMap[62] === 0 && maps[floor].unitMap[64] === 0) {
                maps[floor].terrainMap[52] = 0
            }
            break
        case 9:
            if (maps[floor].unitMap[25] === 0 && maps[floor].unitMap[47] === 0) {
                maps[floor].terrainMap[35] = 0
            }
            break
    }
}