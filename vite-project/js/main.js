import "../styles/style.css";
import { songs } from "./songs"
let audioElement = document.querySelector("audio");
let canvasElement = document.querySelector("#waves");
const wholePlanet = document.getElementById("planet-ring");
import {Wave} from "@foobar404/wave";
let wave = new Wave(audioElement, canvasElement);
audioElement.volume = 0.2;
audioElement.loop = true;

const audios = {
    sukida: document.getElementById("sukida")
}
const DOMSelectors = {
    forwards: document.getElementById("forwards"),
    backwards: document.getElementById("backwards")
}
wholePlanet.addEventListener("click", function(){
    audios.sukida.play();
    wave.addAnimation(new wave.animations.Lines({
        count: 120,
        lineColor: "white",
    }));
})
DOMSelectors.forwards.addEventListener("click", function() {
    console.log(songs);
})