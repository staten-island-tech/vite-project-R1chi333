import "../styles/style.css";
import "../styles/raddogs.css";
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
let settingsmenu = "off"
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
    if(settingsmenu === "off"){
      audioElement.pause();
      removeModeSelectors();
      mode = "easy";
      showPlayableSongs();
      return mode;
    }
  });
  hardMode.addEventListener("click", function () {
    if(settingsmenu === "off"){
      removeModeSelectors();
      audioElement.pause();
      mode = "hard";
      showPlayableSongs();
      return mode;
    }
  });
  mediumMode.addEventListener("click", function () {
    if(settingsmenu === "off"){
      removeModeSelectors();
      audioElement.pause();
      mode = "medium";
      return mode;
    }
  });
  settings.addEventListener("click", function () {
    if(settingsmenu === "off"){
      removeModeSelectorssettings();
      opensettings();
      settingsmenu = "on"
      return settingsmenu;
    }
  });
}

function opensettings(){
  DOMSelectors.el.insertAdjacentHTML("afterend", `       <div id="backarrowthing">🢀</div>   <div id="settingsmenu">
  <h3 class="settingtypes">SETTINGS</h3>
  <div>
      <h4>keybinds</h4>
      <form>
          <input id="keybind1" maxlength="1" type="text">
          <input id="keybind2" maxlength="1" type="text">
          <input id="keybind3" maxlength="1" type="text">
          <input id="keybind4" maxlength="1" type="text">
          <button type="submit"><p>OK</p></button>
      </form>
      <h4 class="settingtypes">offset (milliseconds)</h4>
      <form>
          <input id="offset" type="number">
          <button type="submit"><p>OK</p></button>
      </form>
      <h4 class="settingtypes">volume</h4>
      <div class="slidecontainer">
          <input type="range" min="1" max="200" value="100" class="slider" id="volume">
          <p>Value: <span id="displayvolumevalue"></span>%</p>
        </div>
  </div>
</div>`)

  var volume = document.getElementById("volume");
  var displayvolumevalue = document.getElementById("displayvolumevalue");
  displayvolumevalue.innerHTML = volume.value;

  volume.oninput = function() {
    displayvolumevalue.innerHTML = this.value;
}
    let backarrowthing = document.getElementById("backarrowthing")
  backarrowthing.addEventListener("click", function(){
    let settingsmenupage = document.getElementById("settingsmenu");
    settingsmenupage.remove();
    backarrowthing.remove();
    settingsmenu = "off"
    modes.classList.remove("changeOpacityQuicker");
    DOMSelectors.ozu.classList.remove("changeOpacityQuicker");
    return settingsmenu;
  })
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
let keybindOne = "s"
let keybindTwo = "d"
let keybindThree = "k"
let keybindFour = "l"
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
  window.addEventListener("keydown", (event) => {
    if(event.key === keybindOne){
      let circleOne = document.getElementById("circle4")
      circleOne.classList.add("clicked")
      setTimeout(()=> {
        circleOne.classList.remove("clicked")
      },100)
      const notelineone = Array.from(
        document.querySelectorAll(".note1")
      ).pop();
      notelineone.remove();
    }
    if(event.key === keybindTwo){
      let circleTwo = document.getElementById("circle3")
      circleTwo.classList.add("clicked")
      setTimeout(()=> {
        circleTwo.classList.remove("clicked")
      },100) 
      const notelinetwo = Array.from(
        document.querySelectorAll(".note2")
      ).pop();
      notelinetwo.remove();
    }
    if(event.key === keybindThree){
      let circleThree = document.getElementById("circle2")
      circleThree.classList.add("clicked")
      setTimeout(()=> {
        circleThree.classList.remove("clicked")
      },100) 
      const notelinethree = Array.from(
        document.querySelectorAll(".note3")
      ).pop();
      notelinethree.remove();
    }
    if(event.key === keybindFour){
      let circleFour = document.getElementById("circle1")
      circleFour.classList.add("clicked")
      setTimeout(()=> {
        circleFour.classList.remove("clicked")
      },100) 
      const notelinefour = Array.from(
        document.querySelectorAll(".note4")
      ).pop();
      let place = notelinefour.getBoundingClientRect();
      console.log(place.top)
      if((place.top >= 617 && place.top <= 694)||(place.top > 889 && place.top <= 895)){
        notelinefour.remove();
        console.log("bad")
      }
      if((place.top > 694 && place.top <= 721)||(place.top > 869 && place.top < 895)){
        notelinefour.remove();
        console.log("good")
      }
      if((place.top > 721 && place.top <= 750)||(place.top > 863 && place.top <= 869)){
        notelinefour.remove();
        console.log("great")
      }
      if (place.top > 750 && place.top < 863){
        notelinefour.remove();
        console.log("perfect")
      }
    }
  })
function scoring () {

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
