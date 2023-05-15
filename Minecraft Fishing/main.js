// Functionize Minecraft Fishing Start Code

// HTML Variables
let resultImg = document.getElementById("result-img");
let numCodspan = document.getElementById("num-cod");
let numSalmonspan = document.getElementById("num-salmon");
let numTropicalspan = document.getElementById("num-tropical");
let numPufferspan = document.getElementById("num-puffer");

// Fish Count Variables
let numCod = 0;
let numSalmon = 0;
let numTropical = 0;
let numPuffer = 0;

// Fish Button Event Listener
document.getElementById("fish-btn").addEventListener("click", fishbtnClicked);

function fishbtnClicked() {
  //  Determine Selected Character
  let character = document.getElementById("character-select").value;

  if (character === "steve") {
    // Steve Fish Simulator
    let randNum = Math.random();
    console.log(randNum);
    if (randNum < 0.7) {
      resultImg.src = "Raw-Cod.png";
      numCod++;
      numCodspan.innerHTML = numCod;
    } else if (randNum < 0.9) {
      resultImg.src = "Raw-Salmon.png";
      numSalmon++;
      numSalmonspan.innerHTML = numSalmon;
    } else if (randNum < 0.95) {
      resultImg.src = "Tropical-Fish.png";
      numTropical++;
      numTropicalspan.innerHTML = numTropical;
    } else {
      resultImg.src = "Pufferfish.png";
      numPuffer++;
      numPufferspan.innerHTML = numPuffer;
    }
  } else if (character === "alex") {
    // Alex Fish Simulator
    let randNum = Math.random();
    console.log(randNum);
    if (randNum < 0.1) {
      resultImg.src = "Raw-Cod.png";
      numCod++;
      numCodspan.innerHTML = numCod;
    } else if (randNum < 0.2) {
      resultImg.src = "Raw-Salmon.png";
      numSalmon++;
      numSalmonspan.innerHTML = numSalmon;
    } else if (randNum < 0.5) {
      resultImg.src = "Tropical-Fish.png";
      numTropical++;
      numTropicalspan.innerHTML = numTropical;
    } else {
      resultImg.src = "Pufferfish.png";
      numPuffer++;
      numPufferspan.innerHTML = numPuffer;
    }
  } else if (character === "villager") {
    // Villager Fish Simulator
    let randNum = Math.random();
    console.log(randNum);
    if (randNum < 0.25) {
      resultImg.src = "Raw-Cod.png";
      numCod++;
      numCodspan.innerHTML = numCod;
    } else if (randNum < 0.5) {
      resultImg.src = "Raw-Salmon.png";
      numSalmon++;
      numSalmonspan.innerHTML = numSalmon;
    } else if (randNum < 0.75) {
      resultImg.src = "Tropical-Fish.png";
      numTropical++;
      numTropicalspan.innerHTML = numTropical;
    } else {
      resultImg.src = "Pufferfish.png";
      numPuffer++;
      numPufferspan.innerHTML = numPuffer;
    }
  }
}
