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
    sounds.push(new sound("./musics/item.mp3")) // 0
    sounds.push(new sound("./musics/fight.mp3")) // 1
    sounds.push(new sound("./musics/stair.mp3")) // 2
    sounds.push(new sound("./musics/door.mp3")) // 3
    sounds.push(new sound("./musics/confirm.mp3")) // 4
}