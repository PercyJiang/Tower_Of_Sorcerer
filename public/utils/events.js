/**
 * Get the terrain of where the player is moving toward
 * @param {int} direction Player's direction
 * @return {object} Terrain object
 */
const getTerrain = (direction) => {
    return terrainDict[maps[player.floor].terrainMap[direction]]
}

/**
 * Get the unit of where the player is moving toward
 * @param {int} direction Player's direction
 * @return {object} Unit object
 */
const getUnit = (direction) => { 
    return unitDict[maps[player.floor].unitMap[direction]] 
}
