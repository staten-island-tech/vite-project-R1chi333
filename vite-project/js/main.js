import "../styles/style.css";
import { songs } from "./songs";
import { Wave } from "@foobar404/wave";

const DOMSelectors = {
  ozu: document.getElementById("ozu"),
  backTop: document.getElementById("backTop"),
  title: document.getElementById("title"),
  el: document.getElementById("el"),
  back: document.getElementById("back")
}

let audioElement = document.querySelector("#audio");
let canvasElement = document.querySelector("#osuBase");
let wave = new Wave(audioElement, canvasElement);

addEventListener("click", function(){
  audioElement.play();
})

let open = false

DOMSelectors.backTop.addEventListener("click", function(){
  opening();
})
DOMSelectors.title.addEventListener("click", function(){
  opening();
})

function addModeSelector(){
  DOMSelectors.el.insertAdjacentHTML("afterend", 
  `<div id="modes" class="hidden">
  <div class="mode" id="easyMode">
    <h2>EASY</h2>
  </div>
  <div class="mode" id="mediumMode">
    <h2>MEDIUM</h2>
  </div>
  <div class="mode" id="hardMode">
    <h2>HARD</h2>
  </div>
  <div class="mode" id="expertMode">
    <h2>EXPERT</h2>
</div>`)
  const easyMode = document.getElementById("easyMode")
  const hardMode = document.getElementById("hardMode")
  const expertMode = document.getElementById("expertMode")
  const mediumMode = document.getElementById("mediumMode")
  const modes = document.getElementById("modes")
  setTimeout(() => {
    modes.classList.remove("hidden")
    modes.classList.add("changeOpacity")
    modes.classList.remove("changeOpacityBack")
  }, 1)
  easyMode.addEventListener("click", function(){
    removeModeSelectors();
    let mode = "easy"
    return mode;
  })
  hardMode.addEventListener("click", function(){
    removeModeSelectors();
    let mode = "hard"
    return mode;
  })
  mediumMode.addEventListener("click", function(){
    removeModeSelectors();
    let mode = "medium"
    return mode;
  })
  expertMode.addEventListener("click", function(){
    removeModeSelectors();
    let mode = "expert"
    return mode;
  })
}

function removeModeSelectors(){
  modes.classList.add("changeOpacityQuicker")
  DOMSelectors.ozu.classList.add("changeOpacityQuicker")
  setTimeout(() => {
    modes.remove();
    DOMSelectors.ozu.remove();
  }, 400 )
}
function removeModeSelector(){
  const modes = document.getElementById("modes")
  modes.classList.remove("changeOpacity")
  modes.classList.add("changeOpacityBack")
  setTimeout(() => {
    modes.remove();
  }, "1000")
}
function opening(){
  if(open === false){
    addModeSelector();
    DOMSelectors.ozu.classList.remove("slideBack")
    DOMSelectors.ozu.classList.add("slide")
    open = true;
    console.log(open)
    return open;
  } else{
    removeModeSelector();
    DOMSelectors.ozu.classList.add("slideBack")
    DOMSelectors.ozu.classList.remove("slide")
    open = false;
    console.log(open)
    return open;
  }
}

//get DPI
let dpi = window.devicePixelRatio;
//get canvas
let canvas = document.getElementById("osuBase");
//get context
let ctx = canvas.getContext("2d");
function fix_dpi() {
  //get CSS height
  //the + prefix casts it to an integer
  //the slice method gets rid of "px"
  let style_height = +getComputedStyle(canvas)
    .getPropertyValue("height")
    .slice(0, -2);
  //get CSS width
 let style_width = +getComputedStyle(canvas)
    .getPropertyValue("width")
    .slice(0, -2);
  //scale the canvas
  canvas.setAttribute("height", style_height * dpi);
  canvas.setAttribute("width", style_width * dpi);
}
fix_dpi();

wave.addAnimation(new wave.animations.Glob({
  count: 100,
  fillColor: "pink",
  lineWidth: 5,
  lineColor: "#fff"
}));
