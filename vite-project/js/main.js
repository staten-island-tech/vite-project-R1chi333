import "../styles/style.css";
let audioElement = document.querySelector("#erhu");
let canvasElement = document.querySelector("#waves");
const wholePlanet = document.getElementById("planet-ring");
import {Wave} from "@foobar404/wave";
let wave = new Wave(audioElement, canvasElement);
audioElement.volume = 0.2;

wholePlanet.addEventListener("click", function(){
    audioElement.play();
    wave.addAnimation(new wave.animations.Lines({
        count: 120,
        lineColor: "white",
    }));
})

const forwards = document.getElementById("forwards");
forwards.addEventListener("click", function() {
    console.log("fnjwekew");
})