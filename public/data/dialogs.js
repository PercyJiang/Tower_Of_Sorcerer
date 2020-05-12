const setFairyDialogs = () => {
    dialogs.fairy = {
        0: () => {
            Swal.fire({
                title: 'Fairy:',
                text: 'Hello, welcome to the Tower of Sorcerer! ' +
                    `I'm a fairy and I will guide you throughout this game. ` +
                    `Would you like to hear about the story of this game?`,
                imageUrl: './images/fairy.png',
                imageWidth: 100,
                imageHeight: 100,
                showCancelButton: true,
                cancelButtonText: 'Nope',
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes!'
            }).then((result) => {
                if (result.value) {
                    fairyTalk(
                        'Long long ago, the princess of a kingdom was kidnapped ' +
                        'by the Demon King. The Demon King is the owner of this tower ' +
                        'and he prisoned the princess in the 20th floor. ' +
                        'You are a brave pokemon trainer whose goal is to rescue the ' +
                        'princess and bring her back to the king. '
                    )
                } else {
                    fairyTalk('Please feel free to press H for help at anytime. Have fun!')
                }
            })
        },
        1: () => {
            fairyTalk(
                `The keys can open the doors of corresponding colors, ` +
                `the potions can recover your health, ` +
                `and the gems can increase your attack or defense. `
            )
        },
        2: () => {
            fairyTalk(
                `The Dictionary on the first floor is crucial for this game ` +
                `because it has informaiton of all the monsters on a floor. `
            )
        },
        3: () => {
            fairyTalk(
                `There are swords and shields in this tower. Try to find them first ` +
                `because they will increase your attack or defense greatly. `
            )
        },
        4: () => {
            fairyTalk(
                `I heard the shield can be found on the 7th floor. ` +
                `But it's guarded by the swordman. ` +
                `They will kill you easily if your defense is too low.`
            )
        },
        5: () => {
            fairyTalk(
                `There are traders in this tower and you can buy items from ` +
                `them using coins. However, you have to make the right decision ` +
                `in order to survive in this tower. I won't suggest purchasing potions ` +
                `because purchasing gems is a better deal in general. `
            )
        },
        7: () => {
            fairyTalk(
                `As you could see, some doors are sealed, like the one behind me. ` +
                `They will only unseal if you defeat the monsters guarding the seal. ` +
                `You have to defeat the 2 swordsman behind me to get your shield. ` +
                `They are fit and fast so I suggest increasing your defense! `
            )
        },
        8: () => {
            fairyTalk(
                `The Tower of Sorcerer is divided into zones. ` +
                `Every 10 floors is a zone and every zone is guarded by a boss. ` +
                `The boss of Zone 1 lives in floor 10, ` +
                `you will need a red key to open his door. `
            )
        },
        9: () => {
            fairyTalk(
                `The Slimes are the weakest among the monsters. ` +
                `The Slime King used to be the king among the Slimes and ` +
                `they used to be the boss of Zone 1. However, something happened ` +
                `recently and it seems like they can no longer rule the Slimes anymore. `
            )
        },
    }
}

const setDialogs = () => {
    dialogs = {
        fairy: {}
    }
    setFairyDialogs()
}