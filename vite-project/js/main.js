import "../styles/style.css";
import { songs } from "./songs"
let audioElement = document.querySelector("audio");
let canvasElement = document.querySelector("#waves");
const wholePlanet = document.getElementById("planet-ring");
import {Wave} from "@foobar404/wave";
let wave = new Wave(audioElement, canvasElement);
audioElement.loop = true;
wave.addAnimation(new wave.animations.Lines({
    count: 120,
    lineColor: "white",
}));
//get DPI
let dpi = window.devicePixelRatio;
//get canvas
let canvas = document.getElementById('waves');
//get context
let ctx = canvas.getContext('2d');
function fix_dpi() {
//get CSS height
//the + prefix casts it to an integer
//the slice method gets rid of "px"
let style_height = +getComputedStyle(canvas).getPropertyValue("height").slice(0, -2);
//get CSS width
let style_width = +getComputedStyle(canvas).getPropertyValue("width").slice(0, -2);
//scale the canvas
canvas.setAttribute('height', style_height * dpi);
canvas.setAttribute('width', style_width * dpi);
}
fix_dpi();
const audios = {
    sukida: document.getElementById("sukida"),
    erhu: document.getElementById("erhu"),
    audio: document.querySelectorAll("audios")
}
audios.sukida.volume = 0.2;
audios.erhu.volume = 0.2;
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
    artistbtn: document.getElementsByClassName("artistbtn")
}
const sfx = {
    select: document.getElementById("select")
}
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
    if (theme === 1){
        DOMSelectors.artist.insertAdjacentHTML("afterend", `<div id="kuri-planet-ring">
        <img class="fullplanet" id="kuri-planet" src="media/kuri-planet.gif" alt="kuri-planet">
        <img class="fullplanet" id="kuri-ring" src="media/kuri-ring.gif" alt="kuri-ring">
        <img class="fullplanet" id="krui-orbit" src="media/kuri-orbit.gif" alt="kuri-orbit">
      </div>`)
      const planet = document.getElementById("kuri-lanet")
      const ring = document.getElementById("krui-ring")
      const orbit = document.getElementById("krui-orbit")
      const planetRing = document.getElementById("kuri-planet-ring")
      audios.erhu.play();
    }
    else{
        planet.remove();
        ring.remove();
        orbit.remove();
        planetRing.remove();
        audios.erhu.pause();
    }
})
