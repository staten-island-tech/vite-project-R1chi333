import "../styles/style.css";
import { songs } from "./songs";
import { Wave } from "@foobar404/wave";
import { raddogsbeatmap } from "./raddogsbeatmap";

const DOMSelectors = {
  ozu: document.getElementById("ozu"),
  backTop: document.getElementById("backTop"),
  title: document.getElementById("title"),
  el: document.getElementById("el"),
  back: document.getElementById("back"),
};

let audioElement = document.querySelector("#audio");
let canvasElement = document.querySelector("#osuBase");
let wave = new Wave(audioElement, canvasElement);

DOMSelectors.ozu.addEventListener("click", function () {
  audioElement.play();
});

let open = false;

DOMSelectors.backTop.addEventListener("click", function () {
  opening();
});
DOMSelectors.title.addEventListener("click", function () {
  opening();
});
let mode = "";
function addModeSelector() {
  DOMSelectors.el.insertAdjacentHTML(
    "afterend",
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
  <div class="mode" id="settings">
    <h2>SETTINGS</h2>
</div>`
  );
  const easyMode = document.getElementById("easyMode");
  const hardMode = document.getElementById("hardMode");
  const settings = document.getElementById("settings");
  const mediumMode = document.getElementById("mediumMode");
  const modes = document.getElementById("modes");
  setTimeout(() => {
    modes.classList.remove("hidden");
    modes.classList.add("changeOpacity");
    modes.classList.remove("changeOpacityBack");
  }, 1);
  easyMode.addEventListener("click", function () {
    audioElement.pause();
    removeModeSelectors();
    mode = "easy";
    showPlayableSongs();
    return mode;
  });
  hardMode.addEventListener("click", function () {
    removeModeSelectors();
    audioElement.pause();
    mode = "hard";
    showPlayableSongs();
    return mode;
  });
  mediumMode.addEventListener("click", function () {
    removeModeSelectors();
    audioElement.pause();
    mode = "medium";
    return mode;
  });
  settings.addEventListener("click", function () {
    removeModeSelectorssettings();
    opensettings();
  });
}

function opensettings(){
  DOMSelectors.el.insertAdjacentHTML("afterend", `       <button id="backarrow">🢀</button>   <div id="settingsmenu">
  <h3 class="settingtypes">SETTINGS</h3>
  <div>
      <h4>keybinds</h4>
      <form>
          <input maxlength="1" type="text">
          <input maxlength="1" type="text">
          <input maxlength="1" type="text">
          <input maxlength="1" type="text">
          <button type="submit"><p>OK</p></button>
      </form>
      <h4 class="settingtypes">offset (milliseconds)</h4>
      <form>
          <input type="number">
          <button type="submit"><p>OK</p></button>
      </form>
      <h4 class="settingtypes">volume</h4>
      <div class="slidecontainer">
          <input type="range" min="1" max="100" value="50" class="slider" id="myRange">
          <p>Value: <span id="demo"></span></p>
        </div>
  </div>
</div>`)
  var slider = document.getElementById("myRange");
  var output = document.getElementById("demo");
  output.innerHTML = slider.value;

  slider.oninput = function() {
    output.innerHTML = this.value;
}

}

let artOn = true
let songContainer = null;
function showPlayableSongs() {
  DOMSelectors.el.insertAdjacentHTML(
    "afterend",
    `<div id="songContainer">
  <h3 id="selectSign"></h3>SELECT</h3>
  </div>`
  );
  songs
    .filter((filteredSongs) => filteredSongs.difficulty === mode)
    .forEach((playableSongs) => {
      songContainer = document.getElementById("songContainer");
      let albumCoverArt = document.getElementById("albumcoverart")
      let albumCover = document.getElementById("albumcover")
      songContainer.insertAdjacentHTML(
        "beforeend",
        `      
      <div class="songCard" id="${playableSongs.id}">
      <h4>${playableSongs.title}</h4>
      </div>`
      );
      let theSongCard = document.getElementById(`${playableSongs.id}`)
      theSongCard.addEventListener("click", function(){
        songContainer.remove();
        albumCover.remove();
        albumCoverArt.remove();
        DOMSelectors.el.insertAdjacentHTML("afterend", `<video id="mv" autoplay>
        <source src="${playableSongs.mv}" type="video/mp4">
      </video>`)
        setupgamemap();
        if(playableSongs.title === "RAD DOGS"){
          raddogsbeatmap();
        }
      })
      theSongCard.addEventListener("mouseover", function(){
        if(artOn === true){
          DOMSelectors.el.insertAdjacentHTML("afterend", `<div class="changeOpacityQuicker" id="albumcover"><img id="albumcoverart" src="${playableSongs.art}" alt=""></div>`)
          albumCover = document.getElementById("albumcover")
          albumCoverArt = document.getElementById("albumcoverart")
          albumCover.classList.remove("changeOpacityQuicker")
          albumCover.classList.add("changeOpacityQuickerOn")
          artOn = false
          console.log(artOn)
          return artOn;
        }
      })
      theSongCard.addEventListener("mouseout", function(){
        if(artOn === false){
          let albumCover = document.getElementById("albumcover")
          albumCover.classList.add("changeOpacityQuicker")
          albumCover.classList.remove("changeOpacityQuickerOn")
          setTimeout(() => {
            albumCover.remove();
          }, 400)
          artOn = true
          console.log(artOn)
          return artOn;
        }
      })
    });
}
function setupgamemap(){
  DOMSelectors.el.insertAdjacentHTML("afterend", `    <div>
  <div id="gamecontainerback"></div>
  <div id="gamecontainer">
      <div id="c" class="vl"></div>
      <div id="e" class="vl"></div>
  </div>
  <div>
      <div id="circle1" class="circle"></div>
      <div id="circle2" class="circle"></div>
      <div id="circle3" class="circle"></div>
      <div id="circle4" class="circle"></div>
  </div>
</div>`)
}
function removeModeSelectors() {
  modes.classList.add("changeOpacityQuicker");
  DOMSelectors.ozu.classList.add("changeOpacityQuicker");
  setTimeout(() => {
    modes.remove();
    DOMSelectors.ozu.remove();
  }, 400);
}



function removeModeSelectorssettings() {
  modes.classList.add("changeOpacityQuicker");
  DOMSelectors.ozu.classList.add("changeOpacityQuicker");
}



function removeModeSelector() {
  const modes = document.getElementById("modes");
  modes.classList.remove("changeOpacity");
  modes.classList.add("changeOpacityBack");
  setTimeout(() => {
    modes.remove();
  }, "1000");
}
function opening() {
  if (open === false) {
    addModeSelector();
    DOMSelectors.ozu.classList.remove("slideBack");
    DOMSelectors.ozu.classList.add("slide");
    open = true;
    console.log(open);
    return open;
  } else {
    removeModeSelector();
    DOMSelectors.ozu.classList.add("slideBack");
    DOMSelectors.ozu.classList.remove("slide");
    open = false;
    console.log(open);
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

wave.addAnimation(
  new wave.animations.Glob({
    count: 100,
    fillColor: "pink",
    lineWidth: 5,
    lineColor: "#fff",
  })
);