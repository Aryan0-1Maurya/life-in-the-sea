/* 

    #############################################################
      
          @@@@@@@@@@    &&&&&&&&&&&&&&&&&&&    %%%%%%%%%%

(   By ~Aryan Maurya Mr.perfect https://amsrportfolio.netlify.app  )

          @@@@@@@@@@    &&&&&&&&&&&&&&&&&&&    %%%%%%%%%%

    #############################################################

*/

onload = () => {
  const upButton = document.querySelector("#up-button");
  const downButton = document.querySelector("#down-button");
  const rock = document.querySelector(".rock");
  const starfish = document.querySelector("#starfish");
  const scoreContainer = document.querySelector(".score");
  let score = 0;
  const divContainer = document.querySelector(".container");
  const p = document.querySelector("progress");
  const pStatus = document.querySelector(".progress-status");
  const loadContainer = document.querySelector(".load-container");
  const playContainer = document.querySelector(".play-container");
  const soundsInfo = document.querySelector(".sounds-info");
  const bottomText = document.querySelector(".bottom-text");
  const gameEndAudio = document.querySelector("#game-end-audio");
  const ambienceAudio = document.querySelector("#ambience-audio");
  const eatAudio = document.querySelector("#eat-audio");
  divContainer.style.height = "305px";

  setTimeout(() => (divContainer.style.display = "none"), 2000);
  scoreContainer.textContent = "Score: " + score;

  const timer = setInterval(() => {
    p.value++;
    pStatus.textContent = p.value + "%";
    if (p.value > 99) {
      playContainer.style.display = "block";
      soundsInfo.style.display = "block";
      bottomText.style.display = "block";
      clearInterval(timer);
    }
  }, 35);

  let gameWasStarted = false;

  const onWindowResize = () => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    document.body.style.zoom =
      (305 * w) / 400 > h ? `${h / 3.05}%` : `${w / 4}%`;
  };

  playContainer.onclick = () => {
    window.addEventListener("resize", onWindowResize, false);
    onWindowResize();

    render();

    gameWasStarted = true;
    loadContainer.classList.add("run-disappear-animation");
    divContainer.style.display = "block";
    loadContainer.style.display = "none";
    divContainer.classList.add("run-appear-animation");
    ambienceAudio.play();
    eatAudio.play();
    eatAudio.loop = false;
    gameEndAudio.play();
    gameEndAudio.loop = false;
    setTimeout(() => {
      loadContainer.classList.remove("run-disappear-animation");
      divContainer.classList.remove("run-appear-animation");
    }, 1000);
  };

  const fish = document.querySelector(".fish");
  const fishStyles = getComputedStyle(fish);
  let fishYPos = parseFloat(fishStyles.top);
  let countOfWormsContainer = document.querySelector("#count-of-worms");
  let countOfWorms = 0;
  countOfWormsContainer.textContent = `x${countOfWorms}`;

  const hook = new Image();
  const plant = new Image();
  const seaweed = new Image();
  const seaweed2 = new Image();
  const submarine = new Image();
  const swordfish = new Image();
  const worm = new Image();

  /* Icon made by Freepik from www.flaticon.com */
  worm.src = "https://dl.dropbox.com/s/o1xi344wnnelppp/worm.png";

  swordfish.src = "https://dl.dropbox.com/s/66w07c1ndhooq4c/swordfish.png";

  /* Icon made by DinosoftLabs from www.flaticon.com */
  submarine.src = "https://dl.dropbox.com/s/swed7u3azkz6u1m/submarine.png";

  /* Icon made by Freepik from www.flaticon.com */
  seaweed2.src = "https://dl.dropbox.com/s/xafs7d6mvj3mtaw/seaweed2.png";

  /* Icon made by Freepik from www.flaticon.com */
  seaweed.src = "https://dl.dropbox.com/s/ktwth9b1fxxnrna/seaweed1.png";

  /* Icon made by tulpahn from www.flaticon.com */
  plant.src = "https://dl.dropbox.com/s/bnutnqn2g2j2okl/plant.png";

  /* Icon made by smalllikeart from www.flaticon.com */
  hook.src = "https://dl.dropbox.com/s/1vhssf878zg7d84/fishing-hook.png";

  divContainer.append(
    seaweed,
    seaweed2,
    plant,
    submarine,
    swordfish,
    hook,
    worm
  );

  worm.style.cssText = `
  position: relative;
  left: 600px;
  top: -300px;
  width: 30px;
  height: 30px;
  z-index: 9;
  `;

  /* 

    #############################################################
      
          @@@@@@@@@@    &&&&&&&&&&&&&&&&&&&    %%%%%%%%%%

(   By ~Aryan Maurya Mr.perfect https://amsrportfolio.netlify.app  )

          @@@@@@@@@@    &&&&&&&&&&&&&&&&&&&    %%%%%%%%%%

    #############################################################

*/

  hook.style.cssText = `
  position: relative;
  left: 200px;
  width: 100px;
  height: 100px;
  z-index: 9;
  `;

  swordfish.style.cssText = `
  position: relative;
  left: 600px;
  width: 200px;
  height: 100px;
  z-index: 9999;
  `;

  plant.classList.add("run-plant-animation");
  seaweed.classList.add("run-seaweed-animation");
  seaweed2.classList.add("run-seaweed2-animation");
  submarine.classList.add("run-submarine-animation");
  rock.classList.add("run-rock-animation");
  starfish.classList.add("run-rock-animation");
  worm.classList.add("run-worm-move-animation");

  const timer2 = setInterval(() => {
    if (gameWasStarted) {
      setTimeout(() => {
        swordfish.classList.add("run-swordfish-animation");
        hook.classList.add("run-hook-move-animation");
      }, 2000);
      clearInterval(timer2);
    }
  }, 100);

  function render() {
    requestAnimationFrame(render);
    if (parseFloat(hookStyles.transform.slice(19, 25)) > -5) setHookPos();
    if (parseFloat(swordfishStyles.transform.slice(18, 25)) > -15)
      setSwordfishTopPos();

    if (wormStyles.transform.slice(19, 25) > -10) {
      hookIsBehind = true;
      setWormPosition();
    }

    if (
      parseFloat(wormStyles.transform.slice(19, 25)) +
        parseFloat(worm.style.left) >
        -280 &&
      parseFloat(wormStyles.transform.slice(19, 25)) +
        parseFloat(worm.style.left) <
        -160 &&
      fishYPos < parseInt(wormStyles.top) + 470 &&
      fishYPos > parseInt(wormStyles.top) + 410
    ) {
      worm.style.display = "none";
      wormIsDissapeared++;
      countOfWorms++;
      countOfWormsContainer.textContent = `x${countOfWorms}`;
      score += 100;
      scoreContainer.textContent = "Score: " + score;
    }

    if (
      parseFloat(swordfishStyles.transform.slice(19, 25)) < -1670 ||
      parseFloat(hookStyles.transform.slice(19, 25)) < -670
    ) {
      score++;
      scoreContainer.textContent = "Score: " + score;
    }

    if (
      (parseFloat(hookStyles.transform.slice(18, 27)) > -350 &&
        parseFloat(hookStyles.transform.slice(18, 27)) < -300 &&
        fishYPos - 510 < parseFloat(hook.style.top)) ||
      (fishYPos > parseFloat(swordfishStyles.top) + 360 &&
        fishYPos < parseFloat(swordfishStyles.top) + 440 &&
        parseFloat(swordfishStyles.transform.slice(18, 25)) > -650 &&
        parseFloat(swordfishStyles.transform.slice(18, 25)) < -550)
    ) {
      setTimeout(() => {
        divContainer.style.display = "none";
        fishYPos = 30;
      }, 200);
      setTimeout(() => {
        score = 0;
        countOfWorms = 0;
        scoreContainer.textContent = "Score: " + score;
        countOfWormsContainer.textContent = `x${countOfWorms}`;
        divContainer.style.display = "block";
      }, 600);
    }

    document.documentElement.dispatchEvent(clickEvent);
  }

  submarine.style.cssText = `
  position: relative;
  top: -450px;
  left: -450px;
  width: 75px;
  height: 75px;
  z-index: 9;
  `;

  seaweed.style.cssText = `
  position: relative;
  top: -71px;
  width: 100px;
  height: 100px;
  z-index: 20;
  `;

  seaweed2.style.cssText = `
  position: relative;
  top: -73px;
  width: 100px;
  height: 100px;
  z-index: 9999;
  `;

  plant.style.cssText = `
  position: relative;
  top: -72px;
  width: 100px;
  height: 100px;
  z-index: 20;
  `;

  function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }

  function setSwordfishTopPos() {
    let topPos = randomInteger(-190, -250);
    swordfish.style.top = `${topPos}px`;
    if (num % 5 == 0) {
      swordfish.style.top = `${randomInteger(-185, -195)}px`;
    }
  }

  function setHookPos() {
    let topPos = randomInteger(-420, -460);
    hook.style.top = `${topPos}px`;
  }

  function setWormPosition() {
    let leftPos = randomInteger(300, 600);
    let topPos = randomInteger(-355, -420);
    worm.style.display = "inline";
    worm.style.left = `${leftPos}px`;
    worm.style.top = `${topPos}px`;
  }

  let num = 1;

  setInterval(() => num++, 3500);

  let wormIsDissapeared = 0;

  const swordfishStyles = getComputedStyle(swordfish);
  const hookStyles = getComputedStyle(hook);
  const wormStyles = getComputedStyle(worm);

  const changeFishPosToBottom = () => (fishYPos += 15);

  const changeFishPosToTop = () => (fishYPos -= 15);

  const clickEvent = new Event("click");
  document.documentElement.onclick = () => {
    if (wormIsDissapeared == 1) {
      eatAudio.muted = false;
      eatAudio.play();
      wormIsDissapeared = 0;
    }

    if (divContainer.style.display == "none" && gameWasStarted) {
      gameEndAudio.muted = false;
      gameEndAudio.play();
    }
  };

  function setFishPosition() {
    if (gameWasStarted) {
      if (fishYPos > parseFloat(divContainer.style.height) - 60) return;

      if (fishYPos < parseFloat(divContainer.style.height) - 60) {
        fishYPos += 1;
        fish.style.top = `${fishYPos}px`;
      }
    }
  }

  setInterval(setFishPosition, 100);

  upButton.onclick = () => {
    if (fishYPos < -20) return;
    changeFishPosToTop();
  };

  downButton.onclick = () => {
    if (fishYPos > 227) return;
    changeFishPosToBottom();
  };
};

/* 

    #############################################################
      
          @@@@@@@@@@    &&&&&&&&&&&&&&&&&&&    %%%%%%%%%%

(   By ~Aryan Maurya Mr.perfect https://amsrportfolio.netlify.app  )

          @@@@@@@@@@    &&&&&&&&&&&&&&&&&&&    %%%%%%%%%%

    #############################################################

*/
