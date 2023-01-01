import "../styles/style.css";
import "../styles/raddogs.css";
import { songs } from "./songs";
import { Wave } from "@foobar404/wave";
import { combo, combocounterup, misscount, raddogsbeatmap, combomultiplier, yaycombo } from "./raddogsbeatmap";

//default keybinds
let score = 0;
let keybindOne = "s"
let keybindTwo = "d"
let keybindThree = "k"
let keybindFour = "l"

//titlepage DOMS
const DOMSelectors = {
  ozu: document.getElementById("ozu"),
  backTop: document.getElementById("backTop"),
  title: document.getElementById("title"),
  el: document.getElementById("el"),
  back: document.getElementById("back"),
};

//stuff for audio visualizer 
let audioElement = document.querySelector("#audio");
let canvasElement = document.querySelector("#osuBase");
let wave = new Wave(audioElement, canvasElement);
DOMSelectors.ozu.addEventListener("click", function () {
  audioElement.play();
});

//open/closing menu
let open = false;
DOMSelectors.backTop.addEventListener("click", function () {
  opening();
});
DOMSelectors.title.addEventListener("click", function () {
  opening();
});
// + animation for opening/closing menus
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

//making the HTML for mode + settings / making them selectable
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
      showPlayableSongs();
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

//user chooses settings
function opensettings(){
  DOMSelectors.el.insertAdjacentHTML("afterend", `       <div id="backarrowthing">🢀</div>   <div id="settingsmenu">
  <h3 class="settingtypes">SETTINGS</h3>
  <div>
      <h4>keybinds</h4>
      <form>
          <input id="keybind1" maxlength="1" type="text" placeholder="S">
          <input id="keybind2" maxlength="1" type="text" placeholder="D">
          <input id="keybind3" maxlength="1" type="text" placeholder="K">
          <input id="keybind4" maxlength="1" type="text" placeholder="L">
          <button id="confirmkeybinds" type="submit"><p>OK</p></button>
      <h4 class="settingtypes">THEME CHANGER to pass project ig :D</h4>
  </div>
</div>`)
  let confirmkeybinds = document.getElementById("confirmkeybinds")
  let keybind1input = document.getElementById("keybind1")
  let keybind2input = document.getElementById("keybind2")
  let keybind3input = document.getElementById("keybind3")
  let keybind4input = document.getElementById("keybind4")
  confirmkeybinds.addEventListener("click", function(e){
    e.preventDefault();
    keybindOne = keybind1input.value
    keybindTwo = keybind2input.value
    keybindThree = keybind3input.value
    keybindFour = keybind4input.value
  })
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

//filters the songs playable based on difficulty 
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
      );                                                                    //HTML for song selection menu
      let theSongCard = document.getElementById(`${playableSongs.id}`)      //its probably bad that I have no clue how my own code works anymore
      theSongCard.addEventListener("click", function(){                     //removes the playable song selection page ig
        songContainer.remove();
        albumCover.remove();
        albumCoverArt.remove();
        DOMSelectors.el.insertAdjacentHTML("afterend", `<video id="mv" autoplay>
        <source src="${playableSongs.mv}" type="video/mp4">
      </video>`)
      let themvthatsplaying = document.getElementById("mv")                 //end
      themvthatsplaying.onended = function() {
        console.log("RESULTS")
        console.log(misscount)
        console.log(badcount)
        console.log(goodcount)
        console.log(greatcount)
        console.log(perfectcount)
        console.log(combo)
        console.log(score)
      };
        setupgamemap();                                                         //game technically starts here
        if(playableSongs.title === "RAD DOGS"){
          raddogsbeatmap();
        }                                                                   
        if(playableSongs.title === "Erhu"){                            
          console.log("IT WORKS??")
        }
      return themvthatsplaying;
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

let combonum = null;
let place = null
let noteline = null

//creates the playmat
function setupgamemap(){
  DOMSelectors.el.insertAdjacentHTML("afterend", `      <div id="combocon">
  <p id="combonum"></p>
</div>  <div>
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
 combonum = document.getElementById("combonum")
 return combonum;
}

//makes keybinds interactable
window.addEventListener("keydown", (event) => {
  if(event.key === keybindOne){
    let circleOne = document.getElementById("circle4")    //animation to show keybind was clicked
    circleOne.classList.add("clicked")
    setTimeout(()=> {
      circleOne.classList.remove("clicked")
    },100)
    noteline = Array.from(
      document.querySelectorAll(".note1")          //gets the last element of the class/node
    ).pop();
    place = noteline.getBoundingClientRect();     //gets coordinates 
    console.log(place.top)
     scoring();
    return place;
  }
  if(event.key === keybindTwo){
    let circleTwo = document.getElementById("circle3")
    circleTwo.classList.add("clicked")
    setTimeout(()=> {
      circleTwo.classList.remove("clicked")
    },100) 
    noteline = Array.from(
      document.querySelectorAll(".note2")
    ).pop();
    place = noteline.getBoundingClientRect();
    console.log(place.top)
    scoring();
    return place;
  }
  if(event.key === keybindThree){
    let circleThree = document.getElementById("circle2")
    circleThree.classList.add("clicked")
    setTimeout(()=> {
      circleThree.classList.remove("clicked")
    },100) 
    noteline = Array.from(
      document.querySelectorAll(".note3")
    ).pop();
    place = noteline.getBoundingClientRect();
    console.log(place.top)
    scoring();
    return place;
  }
  if(event.key === keybindFour){
    let circleFour = document.getElementById("circle1")
    circleFour.classList.add("clicked")
    setTimeout(()=> {
      circleFour.classList.remove("clicked")
    },100) 
    noteline = Array.from(
      document.querySelectorAll(".note4")
    ).pop();
    place = noteline.getBoundingClientRect();
    console.log(place.top)
    scoring();
    return place;
  }
})

//scoring the game
let badcount = 0
let goodcount = 0
let greatcount = 0
let perfectcount = 0
function combocounter(){
  combocounterup(); 
  console.log(combo)
  combonum.innerHTML = `${combo}`;
  return combo;
}

function scoring () {
  if((place.top >= 617 && place.top <= 694)||(place.top > 889 && place.top <= 895)){
    noteline.remove();
    DOMSelectors.el.insertAdjacentHTML("afterend", `    <div id="scoreannc">
    <p id="bad">BAD</p>
</div>`)
    let bad = document.getElementById("bad")
    badcount++;
    yaycombo();
    score = (score + (50*combomultiplier));
    combocounter();
    setTimeout(() => {
      bad.remove();
    }, 200)
    console.log("bad")
    console.log(score)
    console.log(combomultiplier)
    return badcount;
  }
  if((place.top > 694 && place.top <= 721)||(place.top > 869 && place.top < 895)){
    noteline.remove();
    DOMSelectors.el.insertAdjacentHTML("afterend", `    <div id="scoreannc">
    <p id="good">GOOD</p>
</div>`)
  let good = document.getElementById("good")
  goodcount++;
  yaycombo();
  score = (score + (100*combomultiplier));
  combocounter();
  setTimeout(() => {
    good.remove();
  }, 200)
    console.log("good")
    console.log(score)
    console.log(combomultiplier)
    return goodcount
  }
  if((place.top > 721 && place.top <= 750)||(place.top > 863 && place.top <= 869)){
    noteline.remove();
    DOMSelectors.el.insertAdjacentHTML("afterend", `    <div id="scoreannc">
    <p id="great">GREAT</p>
</div>`)
  let great = document.getElementById("great")
  greatcount++;
  yaycombo();
  score = (score + (200*combomultiplier));
  combocounter();
  setTimeout(() => {
  great.remove();
  }, 200)
    console.log("great")
    console.log(score)
    console.log(combomultiplier)
    return greatcount;
  }
  if (place.top > 750 && place.top < 863){
    noteline.remove();
    DOMSelectors.el.insertAdjacentHTML("afterend", `    <div id="scoreannc">
    <p id="perfect">PERFECT</p>
</div>`)
  let perfect = document.getElementById("perfect")
  perfectcount++;
  yaycombo();
  score = (score + (300*combomultiplier));
  combocounter();
  setTimeout(() => {
    perfect.remove();
  }, 200)
    console.log("perfect")
    console.log(score)
    console.log(combomultiplier)
    return perfectcount;
  }
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

//results page 

//no blurry canvas code
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