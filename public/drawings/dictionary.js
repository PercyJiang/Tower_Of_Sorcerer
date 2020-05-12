/**
 * Draw the dictionary based on player's current floor
 */
const drawDictionary = () => {
    let enemyList = []
    switch (dictionaryPage) {
        case 0:
            enemyList = getEnemyList().slice(0, 3)
            break
        case 1:
            enemyList = getEnemyList().slice(3, 6)
            break
        case 2:
            enemyList = getEnemyList().slice(6, 9)
            break
        case 3:
            enemyList = getEnemyList().slice(9, 12)
            break
    }
    ctx.font = "12px Arial"
    ctx.fillStyle = "white"
    ctx.textBaseline = "middle"
    ctx.fillText(`Page ${dictionaryPage + 1}`, 200, PS + 15)
    for (let i = 1; i <= 11; i++) {
        for (let j = 1; j <= 11; j++) {
            // the floor had been drawn among collecting enemy list
            if (enemyList.length === 0) {
                break
            }
            if (j === 2 && i % 3 === 0) {
                let enemy = enemyList.pop()
                enemy.draw(i, j)
                ctx.font = "12px Arial"
                ctx.fillStyle = "white"
                ctx.textBaseline = "middle"
                ctx.fillText(`Name: ${enemy.name}`, 265, i * PS)
                ctx.fillText(`DMG: ${enemy.dmg()}`, 450, i * PS)
                ctx.fillText(`HP: ${enemy.hp}`, 265, i * PS + 15)
                ctx.fillText(`ATK: ${enemy.atk}`, 340, i * PS + 15)
                ctx.fillText(`DEF: ${enemy.def}`, 410, i * PS + 15)
                ctx.fillText(`Coins: ${enemy.coins}`, 490, i * PS + 15)
                ctx.fillText(`Lore: ${enemy.lore}`, 265, i * PS + 30)
                if (enemy.special) {
                    ctx.fillText(`Special: ${enemy.special}`, 265, i * PS + 45)
                }
            }
        }
    }
}