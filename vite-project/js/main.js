import "../styles/style.css";
import "../dist/circular-audio-wave.js";
const stuff = {
    planetring: document.getElementById("planet-ring"),
    planet: document.getElementById("planet"),
    ring: document.getElementById("ring"),
    container: document.getElementById("container"),
    canvas: document.getElementById("canvas1"),
}
const audios = {
    erhu: document.getElementById("erhu")
}

let wave = new CircularAudioWave(document.getElementById('example'));
wave.loadAudio(audios.erhu);
stuff.planetring.addEventListener("click", function(){
    wave.play()

})