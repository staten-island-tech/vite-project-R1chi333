
let el = document.getElementById("el")
let theplace = null;
function missthingy(){
  let ahhhnote = document.getElementById("ahhhnote")
  setTimeout(() => {
    theplace = ahhhnote.getBoundingClientRect();
    if (theplace.top >= 960){
      console.log(theplace.top)
      combo = 0
      combomultiplier = .99
      console.log(combomultiplier)
      combonum.innerHTML = "";
      console.log(misscount)
      el.insertAdjacentHTML("afterend", `    <div id="scoreannc">
      <p id="miss">MISS</p>
  </div>`)
      ahhhnote.remove();
      let miss = document.getElementById("miss")
      misscount++;
      setTimeout(() => {
        miss.remove();
      }, 200)
      return theplace
    }
  }, 1500)
}
function raddogsbeatmap(){
      setTimeout(() => {
        el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
        missthingy();
      }, 18200)
      setTimeout(() => {
        el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
        missthingy();
      }, 28200)
      setTimeout(() => {
        el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
        missthingy();
      }, 35200)
      setTimeout(() => {
        el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
        missthingy();
      }, 35200)
      setTimeout(() => {
        el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
        missthingy();
      }, 45200)
      setTimeout(() => {
        el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
        missthingy();
      }, 48200)
      setTimeout(() => {
        el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
        missthingy();
      }, 51200)
      setTimeout(() => {
        el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
        missthingy();
      }, 53200)
      setTimeout(() => {
        el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
        missthingy();
      }, 54200)
      setTimeout(() => {
        el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
        missthingy();
      }, 54200)
      setTimeout(() => {
        el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
        missthingy();
      }, 59200)
      setTimeout(() => {
        el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
        missthingy();
      }, 59200)
      setTimeout(() => {
        el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
        missthingy();
      }, 66200)
      setTimeout(() => {
        el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
        missthingy();
      }, 68200)
      setTimeout(() => {
        el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
        missthingy();
      }, 71200)
      setTimeout(() => {
        el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
        missthingy();
      }, 73200)
      setTimeout(() => {
        el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
        missthingy();
      }, 79200)
      setTimeout(() => {
        el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
        missthingy();
      }, 79200)
      setTimeout(() => {
        el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
        missthingy();
      }, 81200)
      setTimeout(() => {
        el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
        missthingy();
      }, 81200)
      setTimeout(() => {
        el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
        missthingy();
      }, 83200)
      setTimeout(() => {
        el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
        missthingy();
      }, 83200)
      setTimeout(() => {
        el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
        missthingy();
      }, 89200)
      setTimeout(() => {
        el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
        missthingy();
      }, 92200)
      setTimeout(() => {
        el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
        missthingy();
      }, 96200)
      setTimeout(() => {
        el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
        missthingy();
      }, 104200)
      setTimeout(() => {
        el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
        missthingy();
      }, 107200)
      setTimeout(() => {
        el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
        missthingy();
      }, 110200)
      setTimeout(() => {
        el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
        missthingy();
      }, 115200)
      setTimeout(() => {
        el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
        missthingy();
      }, 121200)
      setTimeout(() => {
        el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
        missthingy();
      }, 122200)
      setTimeout(() => {
        el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
        missthingy();
      }, 122400)
      setTimeout(() => {
        el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
        missthingy();
      }, 128200)
      setTimeout(() => {
        el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
        missthingy();
      }, 128200)
      setTimeout(() => {
        el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
        missthingy();
      }, 142200)
      setTimeout(() => {
        el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
        missthingy();
      }, 145200)
      setTimeout(() => {
        el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
        missthingy();
      }, 150200)
      setTimeout(() => {
        el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
        missthingy();
      }, 152200)
      setTimeout(() => {
        el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
        missthingy();
      }, 155200)
      setTimeout(() => {
        el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
        missthingy();
      }, 155200)
      setTimeout(() => {
        el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
        missthingy();
      }, 158200)
      setTimeout(() => {
        el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
        missthingy();
      }, 160200)
      setTimeout(() => {
        el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
        missthingy();
      }, 166200)
      setTimeout(() => {
        el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
        missthingy();
      }, 166200)
      setTimeout(() => {
        el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
        missthingy();
      }, 174200)
      setTimeout(() => {
        el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
        missthingy();
      }, 180200)
      setTimeout(() => {
        el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
        missthingy();
      }, 199200)
      setTimeout(() => {
        el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
        missthingy();
      }, 213200)
}

export { raddogsbeatmap };
export let combo = 0;
export let misscount = 0;
export function combocounterup() {
  combo++;
}
export let combomultiplier = .99;
export function yaycombo() {
  combomultiplier = (combomultiplier+0.01);
}