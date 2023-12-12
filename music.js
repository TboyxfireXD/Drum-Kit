

let drumSound = {
    hightom:'./sound/hightom.mp3',
    crashcymbals : './sound/crashcymbal.mp3',
    highhats:'./sound/hihat.mp3',
    snare : './sound/snare.mp3',
    bass : './sound/bass.mp3',
    mediumtom : './sound/mediumtom.mp3',
    ridecymbals  : './sound/ridecymbal.mp3',
    floortom : './sound/floortom.mp3',

}



let jerry = document.querySelectorAll('.drum')

jerry.forEach(jer=>{
    jer.onclick=()=>{
        var audio = new Audio(drumSound[jer.value])

        // var audio = new Audio("sounds/tom-1.mp3")
        audio.play()
    }
})