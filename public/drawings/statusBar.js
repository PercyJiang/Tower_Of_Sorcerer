const drawStatusBar = () => {
    drawStatusBarLeft()
    drawStatusBarRight()
}

const drawStatusBarLeft = () => {
    // status bar background
    for (let i = 1; i <= 11; i++) {
        for (let j = 1; j <= 5; j++) {
            if (j === 5 || j === 1 || i === 1 || i === 11) {
                ctx.drawImage(bringImage(8), 0, 0, PS, PS, PS * j, PS * i, PS, PS)
            } else {
                ctx.drawImage(bringImage(13), 0, 0, PS, PS, PS * j, PS * i, PS, PS)
            }
            if (j < 5) {
                ctx.drawImage(bringImage(8), 0, 0, PS, PS, PS * j + 512, PS * i, PS, PS)
            }
        }
    }
    // shades
    ctx.globalAlpha = 0.4
    ctx.fillStyle = "black"
    ctx.fillRect(62, 62, 100, 292)
    ctx.globalAlpha = 1
    // floor info
    ctx.font = "20px Comic Sans MS"
    ctx.fillStyle = "white"
    ctx.textBaseline = "middle"
    ctx.fillText("Floor " + player.floor, status_left_dist, 80)
    // player info
    ctx.font = "12px Comic Sans MS"
    ctx.fillStyle = "white"
    ctx.textBaseline = "middle"
    ctx.fillText("Health  " + player.hp, status_left_dist, 100)
    ctx.fillText("Attack  " + player.atk, status_left_dist, 120)
    ctx.fillText("Defense  " + player.def, status_left_dist, 140)
    ctx.fillText("Coins  " + player.coins, status_left_dist, 160)
    // keys info
    ctx.drawImage(bringImage(2), 0, 128, PS, PS, status_left_dist - 3, 170, PS, PS)
    ctx.drawImage(bringImage(2), 32, 128, PS, PS, status_left_dist - 3, 202, PS, PS)
    ctx.drawImage(bringImage(2), 64, 128, PS, PS, status_left_dist - 3, 234, PS, PS)
    ctx.font = "16px Arial"
    ctx.fillStyle = "white"
    ctx.textBaseline = "middle"
    ctx.fillText(player.keyYellow, status_left_dist + PS + 10, 187)
    ctx.fillText(player.keyBlue, status_left_dist + PS + 10, 219)
    ctx.fillText(player.keyRed, status_left_dist + PS + 10, 251)
    // other info
    const info_margin = 17
    ctx.font = "10px Arial"
    ctx.fillStyle = "white"
    ctx.textBaseline = "middle"
    ctx.fillText("A  >>  About", status_left_dist, 340 - info_margin * 4 + 5)
    ctx.fillText("H  >>  Help", status_left_dist, 340 - info_margin * 3 + 5)
    ctx.fillText("R  >>  Restart", status_left_dist, 340 - info_margin * 2 + 5)
    ctx.fillText("S  >>  Save", status_left_dist, 340 - info_margin + 5)
    ctx.fillText("L  >>  Load", status_left_dist, 340 + 5)
}

const drawStatusBarRight = () => {
    // items info
    ctx.globalAlpha = 0.8
    ctx.fillStyle = "black"
    ctx.fillRect(560, 62, 95, 292)
    ctx.globalAlpha = 1
    ctx.font = "14px Arial"
    ctx.fillStyle = "white"
    ctx.textBaseline = "middle"

    // weapons
    ctx.fillText('Sword', 565, 75)
    ctx.fillText('Shield', 565, 125)
    ctx.fillText('Others', 565, 180)
    if (player.sword) {
        ctx.drawImage(bringImage(2),
            player.sword[0] * PS,
            player.sword[1] * PS,
            PS, PS, 610, 65, PS, PS
        )
    }
    if (player.shield) {
        ctx.drawImage(bringImage(2),
            player.shield[0] * PS,
            player.shield[1] * PS,
            PS, PS, 610, 110, PS, PS
        )
    }

    // items
    ctx.font = "10px Arial"
    ctx.fillStyle = "white"
    ctx.textBaseline = "middle"
    ctx.fillText(">>>    D", 610, 210)
    ctx.fillText(">>>    N", 610, 252)
    ctx.fillText(">>>    F", 610, 294)
    ctx.fillText(">>>    M", 610, 336)
    ctx.drawImage(bringImage(2), 0, 7 * PS, PS, PS, 570, 200, PS * 0.8, PS * 0.8)
    ctx.drawImage(bringImage(2), PS, 7 * PS, PS, PS, 570, 240, PS * 0.8, PS * 0.8)
    ctx.drawImage(bringImage(2), 2 * PS, 7 * PS, PS, PS, 570, 280, PS * 0.8, PS * 0.8)
    ctx.drawImage(bringImage(2), PS, 11 * PS, PS, PS, 570, 320, PS * 0.8, PS * 0.8)
}