/**
 * Get the enemy list on player's current floor
 */
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

/**
 * Fire a sweet alert using a Fairy image
 * @param {str} dialog Content of dialog
 */
const fairyTalk = (dialog) => {
    Swal.fire({
        title: 'Fairy:',
        text: dialog,
        imageUrl: './images/fairy.png',
        imageWidth: 100,
        imageHeight: 100
    })
}

/**
 * Calculate the damage that the player will take from fighting an enemy
 * @param {int} hp The enemy's health
 * @param {int} atk The enemy's attack
 * @param {int} def The enemy's defense
 */
const calcDmg = (hp, atk, def) => {
    // returns infinity if player's atk is lower than enemy's def
    if (player.atk <= def) { return 1 / 0 }
    let turns = 0
    let dmgDealtPerTurn = player.atk - def
    let dmgTakenPerTurn = atk - player.def
    turns = Math.ceil(hp / dmgDealtPerTurn)
    let result = (turns - 1) * dmgTakenPerTurn
    return result < 0 ? 0 : result
}