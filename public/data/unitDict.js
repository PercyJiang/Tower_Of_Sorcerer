const calcDmg = (hp, atk, def) => {
    if (player.atk <= def) {
        return 1 / 0
    }
    let turns = 0
    let dmgDealtPerTurn = player.atk - def
    let dmgTakenPerTurn = atk - player.def
    turns = Math.ceil(hp / dmgDealtPerTurn)
    let result = (turns - 1) * dmgTakenPerTurn
    return result < 0 ? 0 : result
}

const setUnitDict = () => {
    unitDict = {
        0: {
            type: 'none',
            name: 'none',
            effect: () => { return },
            draw: (i, j) => { return },
            canPass: () => { return true }
        },
        1: {
            type: 'item',
            name: 'red gem',
            effect: () => {
                player.atk += 2
                sounds[0].play()
            },
            draw: (i, j) => { drawImage(2, 0, 0, i, j) },
            canPass: () => { return true }
        },
        2: {
            type: 'item',
            name: 'blue gem',
            effect: () => {
                player.def += 2
                sounds[0].play()
            },
            draw: (i, j) => { drawImage(2, 1, 0, i, j) },
            canPass: () => { return true }
        },
        3: {
            type: 'item',
            name: 'red potion',
            effect: () => {
                player.hp += 50
                sounds[0].play()
            },
            draw: (i, j) => { drawImage(2, 0, 1, i, j) },
            canPass: () => { return true }
        },
        4: {
            type: 'item',
            name: 'blue potion',
            effect: () => {
                player.hp += 200
                sounds[0].play()
            },
            draw: (i, j) => { drawImage(2, 1, 1, i, j) },
            canPass: () => { return true }
        },
        5: {
            type: 'item',
            name: 'yellow key',
            effect: () => {
                sounds[0].play()
                player.keyYellow++
            },
            draw: (i, j) => { drawImage(2, 0, 4, i, j) },
            canPass: () => { return true }
        },
        6: {
            type: 'item',
            name: 'blue key',
            effect: () => {
                sounds[0].play()
                player.keyBlue++
            },
            draw: (i, j) => { drawImage(2, 1, 4, i, j) },
            canPass: () => { return true }
        },
        7: {
            type: 'item',
            name: 'red key',
            effect: () => {
                sounds[0].play()
                player.keyRed++
            },
            draw: (i, j) => { drawImage(2, 2, 4, i, j) },
            canPass: () => { return true }
        },
        8: {
            type: 'item',
            name: 'dictionary',
            effect: () => {
                sounds[0].play()
                player.items.push('dictionary')
            },
            draw: (i, j) => { drawImage(2, 0, 7, i, j) },
            canPass: () => { return true }
        },
        9: {
            type: 'item',
            name: 'notebook',
            effect: () => {
                sounds[0].play()
                player.items.push('notebook')
            },
            draw: (i, j) => { drawImage(2, 1, 7, i, j) },
            canPass: () => { return true }
        },
        10: {
            type: 'item',
            name: 'flying machine',
            effect: () => {
                sounds[0].play()
                player.items.push('flying machine')
            },
            draw: (i, j) => { drawImage(2, 2, 7, i, j) },
            canPass: () => { return true }
        },
        11: {
            type: 'item',
            name: 'Beginner Sword',
            effect: () => {
                Swal.fire({
                    icon: 'success',
                    title: 'Beginner Sword',
                    text: `Your ATK has been increased by 10`
                })
                sounds[4].play()
                player.sword = [0, 12]
                player.atk += 10
            },
            draw: (i, j) => { drawImage(2, 0, 12, i, j) },
            canPass: () => { return true }
        },
        12: {
            type: 'item',
            name: 'Elite Sword',
            effect: () => { player.sword = [1, 12] },
            draw: (i, j) => { drawImage(2, 1, 12, i, j) },
            canPass: () => { return true }
        },
        13: {
            type: 'item',
            name: 'Captain Sword',
            effect: () => { player.sword = [2, 12] },
            draw: (i, j) => { drawImage(2, 2, 12, i, j) },
            canPass: () => { return true }
        },
        14: {
            type: 'item',
            name: 'Alien Sword',
            effect: () => { player.sword = [3, 12] },
            draw: (i, j) => { drawImage(2, 3, 12, i, j) },
            canPass: () => { return true }
        },
        15: {
            type: 'item',
            name: 'The Divine Sword',
            effect: () => { player.sword = [0, 13] },
            draw: (i, j) => { drawImage(2, 0, 13, i, j) },
            canPass: () => { return true }
        },
        16: {
            type: 'item',
            name: 'Beginner Shield',
            effect: () => {
                Swal.fire({
                    icon: 'success',
                    title: 'Beginner Shield',
                    text: `Your DEF has been increased by 10`
                })
                sounds[4].play()
                player.shield = [0, 14]
                player.def += 10
            },
            draw: (i, j) => { drawImage(2, 0, 14, i, j) },
            canPass: () => { return true }
        },
        17: {
            type: 'item',
            name: 'Elite Shield',
            effect: () => { player.shield = [1, 14] },
            draw: (i, j) => { drawImage(2, 1, 14, i, j) },
            canPass: () => { return true }
        },
        18: {
            type: 'item',
            name: 'Captain Shield',
            effect: () => { player.shield = [2, 14] },
            draw: (i, j) => { drawImage(2, 2, 14, i, j) },
            canPass: () => { return true }
        },
        19: {
            type: 'item',
            name: 'Alien Shield',
            effect: () => { player.shield = [3, 14] },
            draw: (i, j) => { drawImage(2, 3, 14, i, j) },
            canPass: () => { return true }
        },
        20: {
            type: 'item',
            name: 'The Divine Shield',
            effect: () => { player.shield = [0, 15] },
            draw: (i, j) => { drawImage(2, 0, 15, i, j) },
            canPass: () => { return true }
        },
        21: {
            type: 'item',
            name: 'Elixir',
            effect: () => { console.log('not implemented yet') },
            draw: (i, j) => { drawImage(2, 3, 3, i, j) },
            canPass: () => { return true }
        },
        100: {
            type: 'enemy',
            name: 'Skeleton',
            hp: 60,
            atk: 50,
            def: 0,
            coins: 5,
            draw: (i, j) => { drawImage(3, blink, 0, i, j) },
            dmg: function () { return calcDmg(this.hp, this.atk, this.def) },
            canPass: function () { return this.dmg() < player.hp },
            effect: function () {
                player.hp -= this.dmg()
                player.coins += this.coins
                sounds[1].play()
            },
            lore: `A pile of bones`
        },
        101: {
            type: 'enemy',
            name: 'Skeleton Soldier',
            hp: 120,
            atk: 80,
            def: 20,
            coins: 8,
            draw: (i, j) => { drawImage(3, blink, 1, i, j) },
            dmg: function () { return calcDmg(this.hp, this.atk, this.def) },
            canPass: function () { return this.dmg() < player.hp },
            effect: function () {
                player.hp -= this.dmg()
                player.coins += this.coins
                sounds[1].play()
            },
            lore: `A well-trained Skeleton`
        },
        102: {
            type: 'enemy',
            name: 'Skeleton Captain',
            hp: 28,
            atk: 30,
            def: 0,
            coins: 3,
            draw: (i, j) => { drawImage(3, blink, 2, i, j) },
            dmg: function () { return calcDmg(this.hp, this.atk, this.def) },
            canPass: function () { return this.dmg() < player.hp },
            effect: function () {
                player.hp -= this.dmg()
                player.coins += this.coins
                sounds[1].play()
            },
            lore: `Leader of Skeleton Soldiers`
        },
        103: {
            type: 'enemy',
            name: 'Armed Skeleton',
            hp: 28,
            atk: 30,
            def: 0,
            coins: 3,
            draw: (i, j) => { drawImage(3, blink, 3, i, j) },
            dmg: function () { return calcDmg(this.hp, this.atk, this.def) },
            canPass: function () { return this.dmg() < player.hp },
            effect: function () {
                player.hp -= this.dmg()
                player.coins += this.coins
                sounds[1].play()
            }
        },
        104: {
            type: 'enemy',
            name: 'Bat',
            hp: 30,
            atk: 30,
            def: 2,
            coins: 3,
            draw: (i, j) => { drawImage(3, blink, 4, i, j) },
            dmg: function () {
                let attackFirst = this.atk - player.def
                attackFirst = attackFirst <= 0 ? 0 : attackFirst
                return calcDmg(this.hp, this.atk, this.def) + attackFirst
            },
            canPass: function () { return this.dmg() < player.hp },
            effect: function () {
                player.hp -= this.dmg()
                player.coins += this.coins
                sounds[1].play()
            },
            lore: `Fast flying creatures`,
            special: `Always attack first`
        },
        105: {
            type: 'enemy',
            name: 'Huge Bat',
            hp: 66,
            atk: 58,
            def: 12,
            coins: 5,
            draw: (i, j) => { drawImage(3, blink, 5, i, j) },
            dmg: function () {
                let attackFirst = this.atk - player.def
                attackFirst = attackFirst <= 0 ? 0 : attackFirst
                return calcDmg(this.hp, this.atk, this.def) + attackFirst
            },
            canPass: function () { return this.dmg() < player.hp },
            effect: function () {
                player.hp -= this.dmg()
                player.coins += this.coins
                sounds[1].play()
            },
            lore: `Adult bat`,
            special: `Always attack first`
        },
        106: {
            type: 'enemy',
            name: 'Poison Bat',
            hp: 130,
            atk: 120,
            def: 80,
            coins: 30,
            draw: (i, j) => { drawImage(3, blink, 6, i, j) },
            dmg: function () {
                let attackFirst = this.atk - player.def
                attackFirst = attackFirst <= 0 ? 0 : attackFirst
                return calcDmg(this.hp, this.atk, this.def) + attackFirst
            },
            canPass: function () { return this.dmg() < player.hp },
            effect: function () {
                player.hp -= this.dmg()
                player.coins += this.coins
            }
        },
        107: {
            type: 'enemy',
            name: 'Demon King',
            hp: 999,
            atk: 999,
            def: 999,
            coins: 0,
            draw: (i, j) => { drawImage(3, blink, 7, i, j) },
            dmg: function () { return calcDmg(this.hp, this.atk, this.def) },
            canPass: function () { return this.dmg() < player.hp },
            effect: function () {
                player.hp -= this.dmg()
                player.coins += this.coins
            }
        },
        108: {
            type: 'enemy',
            name: 'Green Slime',
            hp: 40,
            atk: 18,
            def: 1,
            coins: 1,
            draw: (i, j) => { drawImage(3, blink, 8, i, j) },
            dmg: function () { return calcDmg(this.hp, this.atk, this.def) },
            canPass: function () { return this.dmg() < player.hp },
            effect: function () {
                player.hp -= this.dmg()
                player.coins += this.coins
                sounds[1].play()
            },
            lore: `A large masses of green fluid`
        },
        109: {
            type: 'enemy',
            name: 'Red Slime',
            hp: 50,
            atk: 20,
            def: 4,
            coins: 2,
            draw: (i, j) => { drawImage(3, blink, 9, i, j) },
            dmg: function () { return calcDmg(this.hp, this.atk, this.def) },
            canPass: function () { return this.dmg() < player.hp },
            effect: function () {
                player.hp -= this.dmg()
                player.coins += this.coins
                sounds[1].play()
            },
            lore: `A large masses of red fluid`
        },
        110: {
            type: 'enemy',
            name: 'Black Slime',
            hp: 60,
            atk: 35,
            def: 8,
            coins: 3,
            draw: (i, j) => { drawImage(3, blink, 10, i, j) },
            dmg: function () { return calcDmg(this.hp, this.atk, this.def) },
            canPass: function () { return this.dmg() < player.hp },
            effect: function () {
                player.hp -= this.dmg()
                player.coins += this.coins
                sounds[1].play()
            },
            lore: `A large masses of black fluid`
        },
        111: {
            type: 'enemy',
            name: 'Slime King',
            hp: 100,
            atk: 55,
            def: 25,
            coins: 6,
            draw: (i, j) => { drawImage(3, blink, 11, i, j) },
            dmg: function () { return calcDmg(this.hp, this.atk, this.def) },
            canPass: function () { return this.dmg() < player.hp },
            effect: function () {
                player.hp -= this.dmg()
                player.coins += this.coins
                sounds[1].play()
            },
            lore: `The king of the Slimes`
        },
        112: {
            type: 'enemy',
            name: 'Sorcerer',
            hp: 65,
            atk: 10,
            def: 5,
            coins: 4,
            draw: (i, j) => { drawImage(3, blink, 12, i, j) },
            dmg: function () {
                let penetrate = this.atk + player.def
                return calcDmg(this.hp, penetrate, this.def)
            },
            canPass: function () { return this.dmg() < player.hp },
            effect: function () {
                player.hp -= this.dmg()
                player.coins += this.coins
                sounds[1].play()
            },
            lore: `A spell caster who attacks with magic`,
            special: `Armor penetration`
        },
        113: {
            type: 'enemy',
            name: 'Elite Sorcerer',
            hp: 200,
            atk: 70,
            def: 30,
            coins: 40,
            draw: (i, j) => { drawImage(3, blink, 13, i, j) },
            dmg: function () {
                let penetrate = this.atk + player.def
                return calcDmg(this.hp, penetrate, this.def)
            },
            canPass: function () { return this.dmg() < player.hp },
            effect: function () {
                player.hp -= this.dmg()
                player.coins += this.coins
                sounds[1].play()
            },
            lore: `A well-trained Sorcerer`,
            special: `Armor penetration`
        },
        114: {
            type: 'enemy',
            name: 'Witch',
            hp: 200,
            atk: 130,
            def: 70,
            coins: 40,
            draw: (i, j) => { drawImage(3, blink, 14, i, j) },
            dmg: function () { return calcDmg(this.hp, this.atk, this.def) },
            canPass: function () { return this.dmg() < player.hp },
            effect: function () {
                player.hp -= this.dmg()
                player.coins += this.coins
            }
        },
        115: {
            type: 'enemy',
            name: 'Mega Witch',
            hp: 300,
            atk: 230,
            def: 100,
            coins: 80,
            draw: (i, j) => { drawImage(3, blink, 15, i, j) },
            dmg: function () { return calcDmg(this.hp, this.atk, this.def) },
            canPass: function () { return this.dmg() < player.hp },
            effect: function () {
                player.hp -= this.dmg()
                player.coins += this.coins
            }
        },
        116: {
            type: 'enemy',
            name: 'Zombie',
            hp: 190,
            atk: 90,
            def: 33,
            coins: 15,
            draw: (i, j) => { drawImage(3, blink, 16, i, j) },
            dmg: function () { return calcDmg(this.hp, this.atk, this.def) },
            canPass: function () { return this.dmg() < player.hp },
            effect: function () {
                player.hp -= this.dmg()
                player.coins += this.coins
            }
        },
        117: {
            type: 'enemy',
            name: 'Zombie Soldier',
            hp: 190,
            atk: 90,
            def: 33,
            coins: 15,
            draw: (i, j) => { drawImage(3, blink, 17, i, j) },
            dmg: function () { return calcDmg(this.hp, this.atk, this.def) },
            canPass: function () { return this.dmg() < player.hp },
            effect: function () {
                player.hp -= this.dmg()
                player.coins += this.coins
            }
        },
        118: {
            type: 'enemy',
            name: 'Golem',
            hp: 85,
            atk: 47,
            def: 49,
            coins: 5,
            draw: (i, j) => { drawImage(3, blink, 18, i, j) },
            dmg: function () { return calcDmg(this.hp, this.atk, this.def) },
            canPass: function () { return this.dmg() < player.hp },
            effect: function () {
                player.hp -= this.dmg()
                player.coins += this.coins
                sounds[1].play()
            },
            lore: `Live creature created by God, using stones`
        },
        120: {
            type: 'enemy',
            name: 'Guard',
            hp: 85,
            atk: 40,
            def: 55,
            coins: 3,
            draw: (i, j) => { drawImage(3, blink, 20, i, j) },
            dmg: function () { return calcDmg(this.hp, this.atk, this.def) },
            canPass: function () { return this.dmg() < player.hp },
            effect: function () {
                player.hp -= this.dmg()
                player.coins += this.coins
            }
        },
        121: {
            type: 'enemy',
            name: 'Elite Guard',
            hp: 85,
            atk: 40,
            def: 55,
            coins: 3,
            draw: (i, j) => { drawImage(3, blink, 21, i, j) },
            dmg: function () { return calcDmg(this.hp, this.atk, this.def) },
            canPass: function () { return this.dmg() < player.hp },
            effect: function () {
                player.hp -= this.dmg()
                player.coins += this.coins
            }
        },
        122: {
            type: 'enemy',
            name: 'Mega Guard',
            hp: 85,
            atk: 40,
            def: 55,
            coins: 3,
            draw: (i, j) => { drawImage(3, blink, 22, i, j) },
            dmg: function () { return calcDmg(this.hp, this.atk, this.def) },
            canPass: function () { return this.dmg() < player.hp },
            effect: function () {
                player.hp -= this.dmg()
                player.coins += this.coins
            }
        },
        123: {
            type: 'enemy',
            name: 'Swordman',
            hp: 800,
            atk: 31,
            def: 0,
            coins: 5,
            draw: (i, j) => { drawImage(3, blink, 23, i, j) },
            dmg: function () { return calcDmg(this.hp, this.atk, this.def) * 2 },
            canPass: function () { return this.dmg() < player.hp },
            effect: function () {
                player.hp -= this.dmg()
                player.coins += this.coins
                sounds[1].play()
            },
            lore: `A skilled sword wielder who is fast and fit`,
            special: `Attacks twice per tern`
        },
        124: {
            type: 'enemy',
            name: 'Demon Slayer',
            hp: 999,
            atk: 999,
            def: 999,
            coins: 999,
            draw: (i, j) => { drawImage(3, blink, 24, i, j) },
            dmg: function () { return calcDmg(this.hp, this.atk, this.def) },
            canPass: function () { return this.dmg() < player.hp },
            effect: function () {
                player.hp -= this.dmg()
                player.coins += this.coins
            }
        },
        125: {
            type: 'enemy',
            name: 'Evil Silver Slime',
            hp: 800,
            atk: 100,
            def: 90,
            coins: 3,
            draw: (i, j) => { drawImage(3, blink, 25, i, j) },
            dmg: function () { return calcDmg(this.hp, this.atk, this.def) },
            canPass: function () { return this.dmg() < player.hp },
            effect: function () {
                player.hp -= this.dmg()
                player.coins += this.coins
            }
        },
        126: {
            type: 'enemy',
            name: 'Evil Princess',
            hp: 800,
            atk: 100,
            def: 90,
            coins: 3,
            draw: (i, j) => { drawImage(3, blink, 26, i, j) },
            dmg: function () { return calcDmg(this.hp, this.atk, this.def) },
            canPass: function () { return this.dmg() < player.hp },
            effect: function () {
                player.hp -= this.dmg()
                player.coins += this.coins
            }
        },
        135: {
            type: 'enemy',
            name: 'Infected Golden Slime',
            hp: 250,
            atk: 80,
            def: 30,
            coins: 10,
            draw: (i, j) => { drawImage(3, blink, 35, i, j) },
            dmg: function () { return calcDmg(this.hp, this.atk, this.def) },
            canPass: function () { return this.dmg() < player.hp },
            effect: function () {
                player.hp -= this.dmg()
                player.coins += this.coins
                sounds[1].play()
            },
            lore: `A golden slime infected by unknown force`
        },
        140: {
            type: 'enemy',
            name: 'Golden Slime',
            hp: 70,
            atk: 45,
            def: 12,
            coins: 4,
            draw: (i, j) => { drawImage(3, blink, 40, i, j) },
            dmg: function () { return calcDmg(this.hp, this.atk, this.def) },
            canPass: function () { return this.dmg() < player.hp },
            effect: function () {
                player.hp -= this.dmg()
                player.coins += this.coins
                sounds[1].play()
            },
            lore: `A large masses of golden fluid`
        },
        143: {
            type: 'enemy',
            name: 'Steel Golem',
            hp: 130,
            atk: 80,
            def: 250,
            coins: 30,
            draw: (i, j) => { drawImage(3, blink, 43, i, j) },
            dmg: function () { return calcDmg(this.hp, this.atk, this.def) },
            canPass: function () { return this.dmg() < player.hp },
            effect: function () {
                player.hp -= this.dmg()
                player.coins += this.coins
                sounds[1].play()
            },
            lore: `Live creature created by God, using steel`
        },
        155: {
            type: 'enemy',
            name: 'Silver Slime',
            hp: 90,
            atk: 50,
            def: 15,
            coins: 5,
            draw: (i, j) => { drawImage(3, blink, 55, i, j) },
            dmg: function () { return calcDmg(this.hp, this.atk, this.def) },
            canPass: function () { return this.dmg() < player.hp },
            effect: function () {
                player.hp -= this.dmg()
                player.coins += this.coins
                sounds[1].play()
            },
            lore: `A large masses of silver fluid`
        },
        200: {
            // hard coded, modify later
            type: 'npc',
            name: 'Wiseman',
            draw: (i, j) => { drawImage(10, blink, 0, i, j) },
            effect: () => {
                Swal.fire({
                    title: 'Developer:',
                    text: `Can I take a look at your dictionary please?`,
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes!'
                }).then((result) => {
                    if (result.value) {
                        if (player.items.includes('dictionary')) {
                            Swal.fire({
                                icon: 'success',
                                title: `Developer:`,
                                text: `Try to get blue gems until your defense is ` +
                                `about 30. Then, buy red gems after you get a shield. `
                            })
                            maps[5].unitMap[49] = 0
                        } else {
                            Swal.fire({ icon: 'error', title: `Lol you don't have one` })
                        }
                    }
                })
            }
        },
        201: {
            type: 'npc',
            name: 'Merchant',
            draw: (i, j) => { drawImage(10, blink, 1, i, j) },
            effect: () => {
                Swal.fire({
                    title: 'Merchant:',
                    text: `Would you like to buy 2 blue potions for 40 coins?`,
                    imageUrl: './images/merchant.png',
                    imageWidth: 100,
                    imageHeight: 100,
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes!'
                }).then((result) => {
                    if (result.value && player.coins >= 40) {
                        sounds[4].play()
                        player.hp += 400
                        player.coins -= 40
                        Swal.fire(
                            'Success!',
                            'You consumed 2 blue potions.',
                            'success'
                        )
                    }
                })
            }
        },
        202: {
            type: 'npc',
            name: 'Thief',
            draw: (i, j) => { drawImage(10, blink, 2, i, j) }
        },
        203: {
            type: 'npc',
            name: 'Fairy',
            draw: (i, j) => { drawImage(10, blink, 3, i, j) },
            effect: () => { dialogs.fairy[player.floor]() }
        },
        204: {
            type: 'npc',
            name: 'Red Alien Golem',
            draw: (i, j) => { drawImage(11, blink, 1, i, j) },
            effect: () => {
                Swal.fire({
                    title: 'Red Alien Golem:',
                    text: `Would you like to buy 2 red gems for 40 coins?`,
                    imageUrl: './images/red_golem.png',
                    imageWidth: 100,
                    imageHeight: 100,
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes!'
                }).then((result) => {
                    if (result.value && player.coins >= 40) {
                        sounds[4].play()
                        player.atk += 4
                        player.coins -= 40
                        Swal.fire(
                            'Success!',
                            'You consumed 2 red gems.',
                            'success'
                        )
                    }
                })
            }
        },
        205: {
            type: 'npc',
            name: 'Blue Alien Golem',
            draw: (i, j) => { drawImage(11, blink, 2, i, j) },
            effect: () => {
                Swal.fire({
                    title: 'Red Alien Golem:',
                    text: `Would you like to buy 2 blue gems for 40 coins?`,
                    imageUrl: './images/blue_golem.png',
                    imageWidth: 100,
                    imageHeight: 100,
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes!'
                }).then((result) => {
                    if (result.value && player.coins >= 40) {
                        sounds[4].play()
                        player.def += 4
                        player.coins -= 40
                        Swal.fire(
                            'Success!',
                            'You consumed 2 blue gems.',
                            'success'
                        )
                    }
                })
            }
        }
    }
}