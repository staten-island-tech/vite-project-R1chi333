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
    backwards: document.getElementById("backwards"),
    changeartist: document.getElementById("changeartist"),
    starttext: document.getElementById("starttext"),
    shopname: document.getElementById("shopname"),
    shopcard: document.getElementById("shopcard"),
    playCard: document.getElementById("play-card"),
    playing: document.getElementById("nowPLaying"),
    artist: document.getElementById("artist"),
}
const sfx = {
    select: document.getElementById("select")
}
// wholePlanet.addEventListener("click", function(){
//     audios.sukida.play();
//     wave.addAnimation(new wave.animations.Lines({
//         count: 120,
//         lineColor: "white",
//     }));
// })
let theme = 0
DOMSelectors.forwards.addEventListener("click", function() {
    sfx.select.play();
    DOMSelectors.starttext.remove();
    if (theme < 5) {
        return theme ++
    }
    else{
        return theme = 0
    }
})
DOMSelectors.backwards.addEventListener("click", function() {
    sfx.select.play();
    DOMSelectors.starttext.remove();
    if (theme > 0) {
        return theme --
    }
    else{
        return theme = 5
    }
})
DOMSelectors.changeartist.addEventListener("click", function(){
    console.log(theme)
})