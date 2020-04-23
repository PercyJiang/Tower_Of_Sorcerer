const handleOtherKeysEvent = (keyCode) => {
    switch (keyCode) {
        case 65: // A for about
            Swal.fire({
                title: 'About',
                text: `This is a practice project written in JavaScript with Canvas. ` +
                    `You can find the original flash game series at ` +
                    `http://www.4399.com/special/68.htm#search3. ` +
                    `Please feel free to email me at ` +
                    `jiangpercy@outlook.com if you have any questions or comments. ` +
                    `Have fun!`,
                imageUrl: './images/psyduck1.gif',
                imageWidth: 200,
                imageHeight: 200,
                imageAlt: 'Custom image',
            })
            break
        case 68: // D for dictionary
            if (player.items.includes('dictionary')) {
                displayDict = !displayDict
                drawEverything()
                dictionaryPage = 0
            } else {
                Swal.fire({
                    icon: 'error',
                    title: `You don't have this item yet.`
                })
            }
            break
        case 70: // F for fly
            if (player.items.includes('flying machine')) {
                console.log('not implemented yet')
            } else {
                Swal.fire({
                    icon: 'error',
                    title: `You don't have this item yet.`
                })
            }
            break
        case 72: // H for help
            Swal.fire({
                title: 'Help',
                text: `Use the arrow keys do move. The damge you deal to each ` +
                    `monster per turn is calculated using your attack minus its defense. ` +
                    `The damage you receive per turn is the monster's attack minus your ` +
                    `defense. Blue potion recovers 200 health and red potion recovers ` +
                    `50 health. Blue gem increases your defense by 2 and red gem ` +
                    `increases your attack by 2.`,
                imageUrl: './images/psyduck1.gif',
                imageWidth: 200,
                imageHeight: 200,
                imageAlt: 'Custom image',
            })
            break
        case 76: // L for load
            if (localStorage.length > 0) {
                player = JSON.parse(localStorage.player)
                maps = JSON.parse(localStorage.maps)
                Swal.fire({
                    title: 'Loading successed!',
                    icon: 'success'
                })
            } else {
                Swal.fire({
                    title: 'No saved data found!',
                    icon: 'error'
                })
            }
            break
        case 77: // M for more items
            if (player.items.includes('flying machine')) {
                console.log('not implemented yet')
            } else {
                Swal.fire({
                    icon: 'error',
                    title: `You don't have this item yet.`
                })
            }
            break
        case 78: // N for notes
            if (player.items.includes('flying machine')) {
                console.log('not implemented yet')
            } else {
                Swal.fire({
                    icon: 'error',
                    title: `You don't have this item yet.`
                })
            }
            break
        case 82: // R for restart
            Swal.fire({
                title: 'Are you sure?',
                text: "Restarting will delete all of your progress!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.value) {
                    localStorage.clear()
                    location.reload(true)
                }
            })
            break
        case 83: // S for save
            localStorage.player = JSON.stringify(player)
            localStorage.maps = JSON.stringify(maps)
            Swal.fire({
                title: 'Your progress has been saved!',
                icon: 'success'
            })
            break
    }
}