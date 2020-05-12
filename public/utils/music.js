const setUpSoundEffect = () => {
    function sound(src) {
        this.sound = document.createElement("audio");
        this.sound.src = src;
        this.sound.setAttribute("preload", "auto");
        this.sound.setAttribute("controls", "none");
        this.sound.style.display = "none";
        document.body.appendChild(this.sound);
        this.play = function () {
            this.sound.play();
        }
        this.stop = function () {
            this.sound.pause();
        }
    }
    sounds['item'] = new sound("./musics/item.mp3")
    sounds['fight'] = new sound("./musics/fight.mp3")
    sounds['stair'] = new sound("./musics/stair.mp3")
    sounds['door'] = new sound("./musics/door.mp3")
    sounds['confirm'] = new sound("./musics/confirm.mp3")
}

const playBGM = () => {
    const audioElement = document.createElement('audio')
    document.body.appendChild(audioElement)
    audioElement.setAttribute('id', 'bgm')
    audioElement.src = '../musics/ElvenForest.mp3'
    audioElement.loop = true
    audioElement.volume = 0.2
    audioElement.currentTime = 2
    audioElement.play()
}

const stopBGM = () => {
    let audio = document.getElementById('bgm')
    audio.remove()
}