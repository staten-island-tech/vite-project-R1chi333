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
// function removeModeSelector(){
//   const modes = modes
//   modes.remove();
//   DOMSelectors.backTop.classList.add("margin")
//   DOMSelectors.backTop.classList.remove("newMargin")
//   DOMSelectors.title.classList.add("margin")
//   DOMSelectors.title.classList.remove("newMargin")
//   DOMSelectors.back.classList.add("margin")
//   DOMSelectors.back.classList.remove("newMargin")
//   canvasElement.classList.remove("newMargin")
//   canvasElement.classList.add("margin")
// }
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






// const DOMSelectors = {
//   deals: document.getElementById("deals"),
//   top2: document.getElementById("top2"),
//   logo: document.getElementById("logo"),
//   op: document.getElementById("op"),
//   menu: document.getElementById("menu"),
//   top: document.getElementById("top"),
//   colorchanger: document.getElementById("colorchanger"),
//   header: document.getElementById("header"),
//   drip: document.getElementById("drip"),
//   naall: document.getElementById("naall"),
//   colorwheel: document.getElementById("color-wheel"),
//   yoasobicard: document.getElementById("YOASOBI-AYASE"),
//   productlist: document.getElementById("productlist"),
// };
// addEventListener("scroll", function () {
//   const scrolled = window.scrollY;
//   if (scrolled >= 80) {
//     DOMSelectors.top.classList.add("up");
//     DOMSelectors.top.classList.remove("down");
//   }
//   if (scrolled < 80) {
//     DOMSelectors.top.classList.remove("up");
//     DOMSelectors.top.classList.add("down");
//   }
// });

// DOMSelectors.logo.addEventListener("click", function () {
//   document.location.reload();
// });

// let colortheme = 1;
// DOMSelectors.colorchanger.addEventListener("click", function () {
//   DOMSelectors.colorwheel.classList.add("spin");
//   setTimeout(() => {
//     DOMSelectors.colorwheel.classList.remove("spin");
//   }, "400");
//   colortheme++;
//   console.log(colortheme);
//   if (colortheme === 7) {
//     DOMSelectors.header.classList.remove("header6");
//     DOMSelectors.drip.classList.remove("drip6");
//     DOMSelectors.naall.classList.remove("bottomcolor6");
//     DOMSelectors.header.classList.add(`header1`);
//     DOMSelectors.drip.classList.add(`drip1`);
//     DOMSelectors.naall.classList.add(`bottomcolor1`);
//     colortheme = 1;
//     return colortheme;
//   }
//   DOMSelectors.header.classList.add(`header${colortheme}`);
//   DOMSelectors.drip.classList.add(`drip${colortheme}`);
//   DOMSelectors.naall.classList.add(`bottomcolor${colortheme}`);
//   DOMSelectors.header.classList.remove(`header${colortheme - 1}`);
//   DOMSelectors.drip.classList.remove(`drip${colortheme - 1}`);
//   DOMSelectors.naall.classList.remove(`bottomcolor${colortheme - 1}`);
// });

// DOMSelectors.yoasobicard.addEventListener("click", function () {
//   DOMSelectors.header.classList.add("changeOpacity");
//   DOMSelectors.drip.classList.add("changeOpacity");
//   DOMSelectors.productlist.classList.add("changeOpacity");
//   setTimeout(() => {
//     DOMSelectors.header.remove();
//     DOMSelectors.drip.remove();
//     DOMSelectors.productlist.remove();
//   }, "1000");
// });







// const DOMSelectors = {
//   forwards: document.getElementById("forwards"),
//   backwards: document.getElementById("backwards"),
//   changeartist: document.getElementById("changeartist"),
//   starttext: document.getElementById("starttext"),
//   shopname: document.getElementById("shopname"),
//   shopcard: document.getElementById("shopcard"),
//   playCard: document.getElementById("play-card"),
//   playing: document.getElementById("nowPLaying"),
//   artist: document.getElementById("artist"),
//   artistbtn: document.getElementsByClassName("artistbtn"),
// };

// const sfx = {
//   select: document.getElementById("select"),
// };

// //get DPI
// let dpi = window.devicePixelRatio;
// //get canvas
// let canvas = document.getElementById("waves");
// //get context
// let ctx = canvas.getContext("2d");
// function fix_dpi() {
//   //get CSS height
//   //the + prefix casts it to an integer
//   //the slice method gets rid of "px"
//   let style_height = +getComputedStyle(canvas)
//     .getPropertyValue("height")
//     .slice(0, -2);
//   //get CSS width
//   let style_width = +getComputedStyle(canvas)
//     .getPropertyValue("width")
//     .slice(0, -2);
//   //scale the canvas
//   canvas.setAttribute("height", style_height * dpi);
//   canvas.setAttribute("width", style_width * dpi);
// }
// fix_dpi();

// let theme = 0;
// DOMSelectors.forwards.addEventListener("click", function () {
//   sfx.select.play();
//   DOMSelectors.starttext.remove();
//   if (theme < 5) {
//     return theme++;
//   } else {
//     return (theme = 0);
//   }
// });
// DOMSelectors.backwards.addEventListener("click", function () {
//   sfx.select.play();
//   DOMSelectors.starttext.remove();
//   if (theme > 0) {
//     return theme--;
//   } else {
//     return (theme = 5);
//   }
// });
// DOMSelectors.forwards.addEventListener("click", function () {
//   console.log(theme);
//   themes();
// });
// DOMSelectors.backwards.addEventListener("click", function () {
//   console.log(theme);
//   themes();
// });

// let menu = closed;

// function open() {
//   const planetRing = document.getElementById("planet-ring");
//   ring.addEventListener("click", function () {
//     if (menu === closed) {
//       console.log("OPENED");
//       planetRing.classList.add("open");
//       planetRing.classList.remove("close");
//       return (menu = open);
//     } else {
//       console.log("CLOSED");
//       planetRing.classList.add("close");
//       planetRing.classList.remove("open");
//       return (menu = closed);
//     }
//   });
// }

// function reset() {
//   const planet = document.getElementById("planet");
//   const ring = document.getElementById("ring");
//   const orbit = document.getElementById("orbit");
//   const planetRing = document.getElementById("planet-ring");
//   const erhu = document.getElementById("erhu");
//   planet.remove();
//   ring.remove();
//   orbit.remove();
//   planetRing.remove();
//   erhu.pause();
//   DOMSelectors.playing.textContent = "NOW PLAYING:";
//   DOMSelectors.artist.textContent = "artist:";
// }
// function audiovis() {
//   let audioElement = document.querySelector("audio");
//   let canvasElement = document.querySelector("#waves");
//   let wave = new Wave(audioElement, canvasElement);
//   audioElement.loop = true;
//   wave.addAnimation(
//     new wave.animations.Lines({
//       count: 120,
//       lineColor: "white",
//     })
//   );
// }
// function themes() {
//   if (theme === 0) {
//     DOMSelectors.changeartist.insertAdjacentElement(
//       "afterend",
//       DOMSelectors.starttext
//     );
//   }
//   if (theme === 1) {
//     DOMSelectors.artist.insertAdjacentHTML(
//       "afterend",
//       `<div class="close" id="planet-ring">
//         <img class="fullplanet" id="planet" src="media/kuri-planet.gif" alt="kuri-planet">
//         <img class="fullplanet" id="ring" src="media/kuri-ring.gif" alt="kuri-ring">
//         <img class="fullplanet" id="orbit" src="media/kuri-orbit.gif" alt="kuri-orbit">
//       </div>`
//     );
//     canvas.insertAdjacentHTML(
//       "afterend",
//       `<div id="audios"><audio class="audio" id="erhu" src="kuritism/erhu.mp3"></audio></div>`
//     );
//     const erhu = document.getElementById("erhu");
//     DOMSelectors.playing.textContent = "NOW PLAYING: erhu";
//     DOMSelectors.artist.textContent = "artist: kuritism";
//     erhu.play();
//     erhu.volume = 0.2;
//     audiovis();
//     open();
//   } else {
//     reset();
//   }
// }
