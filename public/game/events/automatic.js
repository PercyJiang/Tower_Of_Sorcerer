const checkAuto = () => {
    let floor = player.floor
    switch (floor) {
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
        case 10:
            if (maps[floor].unitMap[68] !== 0 && maps[floor].unitMap[69] !== 0 &&
                maps[floor].unitMap[70] !== 0 && maps[floor].unitMap[72] !== 0 &&
                maps[floor].unitMap[73] !== 0 && maps[floor].unitMap[74] !== 0 &&

                maps[floor].unitMap[79] !== 0 && maps[floor].unitMap[80] !== 0 &&
                maps[floor].unitMap[81] !== 0 && maps[floor].unitMap[83] !== 0 &&
                maps[floor].unitMap[84] !== 0 && maps[floor].unitMap[85] !== 0 &&

                maps[floor].unitMap[90] !== 0 && maps[floor].unitMap[91] !== 0 &&
                maps[floor].unitMap[92] !== 0 && maps[floor].unitMap[94] !== 0 &&
                maps[floor].unitMap[95] !== 0 && maps[floor].unitMap[96] !== 0 &&
                player.x === 6 && player.y === 9
            ) {
                maps[floor].terrainMap[115] = 9
                maps[floor].terrainMap[60] = 9
                Swal.fire({
                    title: 'Infected Golden Slime:',
                    text: `Impressive, I didn't expect you to make it this far. ` +
                        `I am the boss of zone 1, the Slime Zone, and I will not let ` +
                        `you proceed any further. Everyone, attack him! `,
                    imageUrl: './images/golden_slime.png',
                    imageWidth: 100,
                    imageHeight: 100
                })
            } else if (maps[floor].unitMap[68] === 0 && maps[floor].unitMap[69] === 0 &&
                maps[floor].unitMap[70] === 0 && maps[floor].unitMap[72] === 0 &&
                maps[floor].unitMap[73] === 0 && maps[floor].unitMap[74] === 0 &&

                maps[floor].unitMap[79] === 0 && maps[floor].unitMap[80] === 0 &&
                maps[floor].unitMap[81] === 0 && maps[floor].unitMap[83] === 0 &&
                maps[floor].unitMap[84] === 0 && maps[floor].unitMap[85] === 0 &&

                maps[floor].unitMap[90] === 0 && maps[floor].unitMap[91] === 0 &&
                maps[floor].unitMap[92] === 0 && maps[floor].unitMap[94] === 0 &&
                maps[floor].unitMap[95] === 0 && maps[floor].unitMap[96] === 0
            ) {
                maps[floor].terrainMap[60] = 0
            }
            if (player.x === 6 && player.y === 6 && maps[floor].unitMap[38] !== 0) {
                Swal.fire({
                    title: 'Infected Golden Slime:',
                    text: `Everyone thinks that the Slimes are the weakest among all ` +
                        `the monsters, I am tired of this. Therefore, I willingly ` +
                        `chose to get infected in order to become stronger. I hope ` +
                        `one day I will lead the Slimes to become the strongest! `,
                    imageUrl: './images/golden_slime.png',
                    imageWidth: 100,
                    imageHeight: 100
                })
            }
            if (maps[floor].unitMap[38] === 0 && maps[floor].terrainMap[5] === 0) {
                maps[floor].terrainMap[37] = 0
                maps[floor].terrainMap[39] = 0
                maps[floor].terrainMap[115] = 0
                Swal.fire({
                    title: 'Infected Golden Slime:',
                    text: `... not bad ... I guess getting infected wasn't ` +
                        `enough to beat you. But don't be happy yet, Zone 2 is ` +
                        `guarded by the Skeletons, they are a lot stronger than us! `,
                    imageUrl: './images/golden_slime.png',
                    imageWidth: 100,
                    imageHeight: 100
                })
                maps[floor].terrainMap[5] = 3
            }
            break
    }
}