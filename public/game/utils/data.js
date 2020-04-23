const getEnemyList = () => {
    let map = maps[player.floor]
    let enemyList = []
    if (enemyList.length === 0) {
        for (let i = 1; i <= 11; i++) {
            for (let j = 1; j <= 11; j++) {
                terrainDict[0].draw(i, j) // draw the floor of dictionary
                let unit = unitDict[map.unitMap[(i - 1) * 11 + j - 1]]
                if (unit.type === 'enemy' && !enemyList.includes(unit)) {
                    enemyList.push(unit)
                }
            }
        }
    }
    return enemyList
}