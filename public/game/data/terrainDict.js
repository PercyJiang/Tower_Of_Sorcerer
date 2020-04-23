const setTerrainDict = () => {
    terrainDict = {
        0: {
            name: 'floor',
            canPass: () => { return true },
            effect: () => { return },
            clear: false,
            draw: (i, j) => {
                drawImage(13, 0, 0, i, j)
            }
        },
        1: {
            name: 'wall',
            canPass: () => { return false },
            effect: () => { return },
            clear: false,
            draw: (i, j) => {
                drawImage(14, 0, 0, i, j)
            }
        },
        2: {
            name: 'stair down',
            canPass: () => { return true },
            effect: () => {
                sounds[2].play()
                player.floor--
                if (!player.visitedFloors.includes(player.floor)) {
                    player.visitedFloors.push(player.floor)
                }
            },
            clear: false,
            draw: (i, j) => {
                drawImage(13, 0, 0, i, j)
                drawImage(6, 0, 0, i, j)
            }
        },
        3: {
            name: 'stair up',
            canPass: () => { return true },
            effect: () => {
                sounds[2].play()
                if (player.floor === 10) {
                    Swal.fire({
                        title: 'Percy:',
                        text: `The rest of the game is not developed yet. ` +
                            `Did you enjoy this game? Please email me at ` +
                            `jiangpercy@outlook.com if you have any questions or ` +
                            `comments! You can find the original flash game series at ` +
                            `http://www.4399.com/special/68.htm#search3. `,
                        imageUrl: './images/psyduck1.gif',
                        imageWidth: 100,
                        imageHeight: 100
                    })
                } else {
                    player.floor++
                    if (!player.visitedFloors.includes(player.floor)) {
                        player.visitedFloors.push(player.floor)
                    }
                }
            },
            clear: false,
            draw: (i, j) => {
                drawImage(13, 0, 0, i, j)
                drawImage(7, 0, 0, i, j)
            }
        },
        4: {
            name: 'yellow door',
            canPass: () => { return player.keyYellow > 0 },
            effect: () => {
                sounds[3].play()
                player.keyYellow--
            },
            clear: true,
            draw: (i, j) => {
                drawImage(5, 0, 0, i, j)
            }
        },
        5: {
            name: 'blue door',
            canPass: () => { return player.keyBlue > 0 },
            effect: () => {
                sounds[3].play()
                player.keyBlue--
            },
            clear: true,
            draw: (i, j) => {
                drawImage(5, 1, 0, i, j)
            }
        },
        6: {
            name: 'red door',
            canPass: () => { return player.keyRed > 0 },
            effect: () => {
                sounds[3].play()
                player.keyRed--
            },
            clear: true,
            draw: (i, j) => {
                drawImage(5, 2, 0, i, j)
            }
        },
        7: {
            name: 'fake wall',
            canPass: () => { return true },
            effect: () => { return },
            clear: true,
            draw: (i, j) => {
                drawImage(8, 1, 0, i, j)
            }
        },
        8: {
            name: 'prison door',
            canPass: () => { return false },
            effect: () => { return },
            clear: true,
            draw: (i, j) => {
                drawImage(13, 0, 0, i, j)
                drawImage(8, 3, 0, i, j)
            }
        },
        9: {
            name: 'automatic door',
            canPass: () => { return false },
            effect: () => { sounds[3].play() },
            clear: true,
            draw: (i, j) => {
                drawImage(5, 3, 0, i, j)
            }
        },
        10: {
            name: 'magma',
            canPass: () => { return false },
            effect: () => { return },
            clear: true,
            draw: (i, j) => {
                drawImage(9, blink, 0, i, j)
            }
        },
        11: {
            name: 'space',
            canPass: () => { return false },
            effect: () => { return },
            clear: true,
            draw: (i, j) => {
                drawImage(9, blink, 2, i, j)
            }
        },
        12: {
            name: 'alternative wall 1',
            canPass: () => { return false },
            effect: () => { return },
            clear: true,
            draw: (i, j) => {
                drawImage(8, 2, 0, i, j)
            }
        },
        13: {
            name: 'alternative wall 2',
            canPass: () => { return false },
            effect: () => { return },
            clear: true,
            draw: (i, j) => {
                drawImage(17, 0, 0, i, j)
            }
        }
    }
}