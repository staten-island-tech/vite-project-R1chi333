
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
      console.log("miss")
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


//DROP POP CANDY
function droppopcandybeatmap(){
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
    missthingy();
  }, 16200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
    missthingy();
  }, 16200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 17200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
    missthingy();
  }, 17200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
    missthingy();
  }, 18200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 18200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 18500)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
    missthingy();
  }, 18800)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 18800)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
    missthingy();
  }, 19500)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
    missthingy();
  }, 19500)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
    missthingy();
  }, 20200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 20200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 20500)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
    missthingy();
  }, 20500)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 20600)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
    missthingy();
  }, 20700)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 20700)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 21200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
    missthingy();
  }, 21200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
    missthingy();
  }, 22200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
    missthingy();
  }, 22200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 23200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 23200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
    missthingy();
  }, 23500)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
    missthingy();
  }, 23500)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
    missthingy();
  }, 24200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 24200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 24500)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 24500)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 24800)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
    missthingy();
  }, 24800)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
    missthingy();
  }, 25000)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
    missthingy();
  }, 25000)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
    missthingy();
  }, 25400)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 25500)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 25600)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 25700)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 25800)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
    missthingy();
  }, 25900)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 25950)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
    missthingy();
  }, 25950)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
    missthingy();
  }, 26200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 26200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 26700)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 26700)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
    missthingy();
  }, 27200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
    missthingy();
  }, 27200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 28200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 28200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 28400)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
    missthingy();
  }, 28600)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
    missthingy();
  }, 28600)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 28800)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 29000)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 29000)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
    missthingy();
  }, 29200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 29200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 29400)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 29400)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 29600)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
    missthingy();
  }, 29800)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 30000)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 30200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
    missthingy();
  }, 30200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 30400)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
    missthingy();
  }, 30600)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
    missthingy();
  }, 30600)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
    missthingy();
  }, 30800)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
    missthingy();
  }, 31000)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 31000)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
    missthingy();
  }, 31200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 31200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 31200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
    missthingy();
  }, 31400)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 31400)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
    missthingy();
  }, 31600)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
    missthingy();
  }, 31600)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
    missthingy();
  }, 32200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
    missthingy();
  }, 32200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 33200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 33200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 34200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 34200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
    missthingy();
  }, 36200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 36200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 37200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
    missthingy();
  }, 37200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
    missthingy();
  }, 38200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 38200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 39200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 39200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
    missthingy();
  }, 39400)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
    missthingy();
  }, 39400)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 39600)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 39600)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 39800)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
    missthingy();
  }, 39800)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 40000)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 40200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 40200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
    missthingy();
  }, 40400)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 40600)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
    missthingy();
  }, 40600)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
    missthingy();
  }, 40800)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
    missthingy();
  }, 40800)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 41000)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
    missthingy();
  }, 41000)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 41200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 41200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
    missthingy();
  }, 41200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 41400)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
    missthingy();
  }, 41400)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
    missthingy();
  }, 41600)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
    missthingy();
  }, 41600)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
    missthingy();
  }, 42200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
    missthingy();
  }, 42200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 42400)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 42600)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 42800)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 43000)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 43200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
    missthingy();
  }, 43400)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
    missthingy();
  }, 43400)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 43600)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 43800)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
    missthingy();
  }, 44000)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
    missthingy();
  }, 44000)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 44200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
    missthingy();
  }, 44200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 44400)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
    missthingy();
  }, 44600)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 44600)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
    missthingy();
  }, 45200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 45400)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
    missthingy();
  }, 45400)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 45600)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 45800)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 45800)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
    missthingy();
  }, 46000)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 46000)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 46200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
    missthingy();
  }, 46400)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
    missthingy();
  }, 46400)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 46600)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 46600)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
    missthingy();
  }, 46800)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
    missthingy();
  }, 46800)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
    missthingy();
  }, 47200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 47200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 48200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 48200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 49200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
    missthingy();
  }, 49200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
    missthingy();
  }, 50200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 50200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 50400)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 50600)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
    missthingy();
  }, 50800)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 50800)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 51000)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
    missthingy();
  }, 51000)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
    missthingy();
  }, 51200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 51200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
    missthingy();
  }, 53200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
    missthingy();
  }, 53200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
    missthingy();
  }, 53400)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 53400)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
    missthingy();
  }, 53600)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
    missthingy();
  }, 53600)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 53800)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 53800)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 54000)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 54000)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 54300)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
    missthingy();
  }, 54300)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
    missthingy();
  }, 54500)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 54500)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 54700)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
    missthingy();
  }, 54700)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
    missthingy();
  }, 54900)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
    missthingy();
  }, 54900)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 55100)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
    missthingy();
  }, 55300)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
    missthingy();
  }, 55300)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 55500)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
    missthingy();
  }, 55700)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 55700)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
    missthingy();
  }, 56200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
    missthingy();
  }, 56300)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
    missthingy();
  }, 56300)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 56600)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 56700)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 56700)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
    missthingy();
  }, 56900)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 56900)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
    missthingy();
  }, 57100)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
    missthingy();
  }, 57100)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 57300)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 57300)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
    missthingy();
  }, 57600)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
    missthingy();
  }, 57600)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
    missthingy();
  }, 58200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 58200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 58400)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 58600)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
    missthingy();
  }, 58600)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
    missthingy();
  }, 58800)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 58800)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
    missthingy();
  }, 59200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 59400)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 59600)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
    missthingy();
  }, 59800)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
    missthingy();
  }, 59800)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 60000)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 60000)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
    missthingy();
  }, 61200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
    missthingy();
  }, 61200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 61400)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
    missthingy();
  }, 61600)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
    missthingy();
  }, 61600)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 61800)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
    missthingy();
  }, 61800)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 62000)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 62200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
    missthingy();
  }, 62400)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 62400)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
    missthingy();
  }, 63200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 63400)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
    missthingy();
  }, 63400)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 63600)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 63800)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 63800)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
    missthingy();
  }, 64000)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 64000)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 64200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
    missthingy();
  }, 64400)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
    missthingy();
  }, 64400)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 64600)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 64600)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
    missthingy();
  }, 64800)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
    missthingy();
  }, 64800)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
    missthingy();
  }, 90200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
    missthingy();
  }, 90200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
    missthingy();
  }, 90400)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 90400)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
    missthingy();
  }, 90600)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
    missthingy();
  }, 90600)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 90800)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 90800)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 91000)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
    missthingy();
  }, 91000)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
    missthingy();
  }, 91200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 91200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 91400)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
    missthingy();
  }, 91400)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
    missthingy();
  }, 91600)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 91600)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
    missthingy();
  }, 91800)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 92000)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 92000)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 92200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
    missthingy();
  }, 92400)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 92400)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 92600)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 92600)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 92800)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 92800)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
    missthingy();
  }, 93000)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
    missthingy();
  }, 93000)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
    missthingy();
  }, 94200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 94400)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 94600)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 94800)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 95000)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
    missthingy();
  }, 95200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
    missthingy();
  }, 95200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 95400)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 95400)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
    missthingy();
  }, 95600)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
    missthingy();
  }, 95600)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 95800)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 95800)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
    missthingy();
  }, 96200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 96200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 97200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
    missthingy();
  }, 97200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
    missthingy();
  }, 98200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 98200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 99200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
    missthingy();
  }, 99200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
    missthingy();
  }, 100200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 100400)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 100400)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 100600)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 100800)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
    missthingy();
  }, 100800)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 101000)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 101000)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 101200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 101200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
    missthingy();
  }, 101400)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
    missthingy();
  }, 101400)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
    missthingy();
  }, 101800)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
    missthingy();
  }, 102000)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 102200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 102400)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 102600)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 102800)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 103000)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 103000)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
    missthingy();
  }, 103500)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
    missthingy();
  }, 103500)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 103700)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 103700)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
    missthingy();
  }, 103900)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 103900)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 104100)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
    missthingy();
  }, 104100)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
    missthingy();
  }, 104400)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 104600)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 104800)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
    missthingy();
  }, 105000)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 105200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
    missthingy();
  }, 105400)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
    missthingy();
  }, 105400)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
    missthingy();
  }, 106200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 106400)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 106400)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
    missthingy();
  }, 106600)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 106800)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 106800)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
    missthingy();
  }, 107000)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 107200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 107200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
    missthingy();
  }, 107400)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 108200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
    missthingy();
  }, 108200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
    missthingy();
  }, 108400)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 108400)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 108600)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 108800)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
    missthingy();
  }, 108800)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 109000)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
    missthingy();
  }, 109000)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 109200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 109200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
    missthingy();
  }, 109400)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 109400)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 109600)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 109600)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
    missthingy();
  }, 109800)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
    missthingy();
  }, 109800)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 110000)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 110100)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
    missthingy();
  }, 110300)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
    missthingy();
  }, 110300)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
    missthingy();
  }, 110500)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 110500)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 110500)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
    missthingy();
  }, 110500)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
    missthingy();
  }, 110800)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
    missthingy();
  }, 110800)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 111000)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 111000)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
    missthingy();
  }, 111200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
    missthingy();
  }, 111200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 111400)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 111400)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
    missthingy();
  }, 111600)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 111600)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 111600)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
    missthingy();
  }, 111600)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
    missthingy();
  }, 111800)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 112000)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 112000)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
    missthingy();
  }, 112000)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
    missthingy();
  }, 112200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 112400)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
    missthingy();
  }, 112400)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
    missthingy();
  }, 112400)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 112600)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 112600)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
    missthingy();
  }, 112800)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
    missthingy();
  }, 113000)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
    missthingy();
  }, 113000)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
    missthingy();
  }, 113200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 113400)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 113600)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
    missthingy();
  }, 113600)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
    missthingy();
  }, 113800)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 114000)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
    missthingy();
  }, 114200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 114200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 114600)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
    missthingy();
  }, 114600)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
    missthingy();
  }, 115000)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 115200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 115400)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
    missthingy();
  }, 115400)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
    missthingy();
  }, 115600)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 115800)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 116000)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
    missthingy();
  }, 116000)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
    missthingy();
  }, 116200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 116200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
    missthingy();
  }, 116600)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 116800)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 117000)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 117200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 117400)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
    missthingy();
  }, 117600)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
    missthingy();
  }, 118000)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 118000)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 118000)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
    missthingy();
  }, 118000)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
    missthingy();
  }, 118200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 118400)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 118400)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
    missthingy();
  }, 118600)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 118800)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 118800)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
    missthingy();
  }, 119000)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 119200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 119200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
    missthingy();
  }, 119400)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
    missthingy();
  }, 119400)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
    missthingy();
  }, 119800)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
    missthingy();
  }, 119800)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
    missthingy();
  }, 120200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
    missthingy();
  }, 120200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 120600)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 120600)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
    missthingy();
  }, 121000)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
    missthingy();
  }, 121000)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 121400)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 121400)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 121800)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 122000)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 122200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 122400)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
    missthingy();
  }, 122600)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 122600)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 122800)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
    missthingy();
  }, 122800)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
    missthingy();
  }, 123000)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 123000)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 123200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
    missthingy();
  }, 123200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
    missthingy();
  }, 123400)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 123400)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
    missthingy();
  }, 123400)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
    missthingy();
  }, 123600)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 123600)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
    missthingy();
  }, 123600)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 123800)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 123800)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 124000)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 124000)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 124400)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note4 down"></div>`)
    missthingy();
  }, 124400)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note1 down"></div>`)
    missthingy();
  }, 124600)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 124600)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 124800)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 125000)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note3 down"></div>`)
    missthingy();
  }, 125200)
  setTimeout(() => {
    el.insertAdjacentHTML("afterend", `<div id="ahhhnote" class="note note2 down"></div>`)
    missthingy();
  }, 125400)
}


//RADDOGS
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

export { raddogsbeatmap, droppopcandybeatmap };
export let combo = 0;
export let misscount = 0;
export function combocounterup() {
  combo++;
}
export let combomultiplier = .99;
export function yaycombo() {
  if(combomultiplier < 2){
    combomultiplier = (combomultiplier+0.01);
  }
}