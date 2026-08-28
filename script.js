/* =========================================
   OUR STORY — JAVASCRIPT
   CLEAN VERSION
========================================= */


/* =========================================
   SCENE ELEMENTS
========================================= */

const opening = document.getElementById("opening");
const enterBtn = document.getElementById("enterBtn");

const story = document.getElementById("story");
const continueBtn = document.getElementById("continueBtn");

const pageScene = document.getElementById("pageScene");
const chapterBtn = document.getElementById("chapterBtn");

const memoryScene = document.getElementById("memoryScene");
const openMemoryBtn = document.getElementById("openMemoryBtn");

const littleThingsScene =
    document.getElementById("littleThingsScene");

const littleThingsBtn =
    document.getElementById("littleThingsBtn");

const timelineScene =
    document.getElementById("timelineScene");

const timelineBtn =
    document.getElementById("timelineBtn");

const letterScene =
    document.getElementById("letterScene");

const letterBtn =
    document.getElementById("letterBtn");

const revealScene =
    document.getElementById("revealScene");

const revealBtn =
    document.getElementById("revealBtn");

const finalScene =
    document.getElementById("finalScene");

    const usScene =
    document.getElementById("usScene");

const usBtn =
    document.getElementById("usBtn");

/* =========================================
   START DATE
========================================= */

const startDate =
    new Date("2026-01-02T00:00:00");


/* =========================================
   TIMER
========================================= */

let timerStarted = false;

function startTimer() {

    if (timerStarted) return;

    timerStarted = true;

    updateTimer();

    setInterval(updateTimer, 1000);
}


function updateTimer() {

    const now = new Date();

    let difference =
        now.getTime() - startDate.getTime();

    if (difference < 0) {
        difference = 0;
    }


    const totalSeconds =
        Math.floor(difference / 1000);


    const days =
        Math.floor(totalSeconds / 86400);


    const hours =
        Math.floor(
            (totalSeconds % 86400) / 3600
        );


    const minutes =
        Math.floor(
            (totalSeconds % 3600) / 60
        );


    const seconds =
        totalSeconds % 60;


    const daysElement =
        document.getElementById("days");

    const hoursElement =
        document.getElementById("hours");

    const minutesElement =
        document.getElementById("minutes");

    const secondsElement =
        document.getElementById("seconds");


    if (daysElement)
        daysElement.textContent = days;


    if (hoursElement)
        hoursElement.textContent =
            String(hours).padStart(2, "0");


    if (minutesElement)
        minutesElement.textContent =
            String(minutes).padStart(2, "0");


    if (secondsElement)
        secondsElement.textContent =
            String(seconds).padStart(2, "0");
}


/* =========================================
   SCENE SWITCH FUNCTION
========================================= */

function switchScene(currentScene, nextScene, delay = 800) {

    if (!currentScene || !nextScene) {
        console.error("Scene missing:", {
            currentScene,
            nextScene
        });

        return;
    }


    currentScene.classList.remove("show");


    setTimeout(function () {

        nextScene.classList.add("show");

        nextScene.scrollTop = 0;

    }, delay);
}


/* =========================================
   SCENE 1 → SCENE 2
========================================= */

if (enterBtn) {

    enterBtn.addEventListener("click", function () {

        if (opening) {
            opening.classList.add("hide");
        }


        setTimeout(function () {

            if (story) {
                story.classList.add("show");
            }

            startTimer();

        }, 900);

    });
}


/* =========================================
   SCENE 2 → SCENE 3
========================================= */

if (continueBtn) {

    continueBtn.addEventListener("click", function () {

        switchScene(
            story,
            pageScene
        );

    });
}


/* =========================================
   SCENE 3 → SCENE 4
========================================= */

if (chapterBtn) {

    chapterBtn.addEventListener("click", function () {

        switchScene(
            pageScene,
            memoryScene
        );

    });
}


/* =========================================
   SCENE 4 → SCENE 5
========================================= */

if (openMemoryBtn) {

    openMemoryBtn.addEventListener("click", function () {

        switchScene(
            memoryScene,
            littleThingsScene
        );

    });
}


/* =========================================
   SCENE 5 → SCENE 6
   29 JAN → 22 MARCH
========================================= */

if (littleThingsBtn) {

    littleThingsBtn.addEventListener("click", function () {

        switchScene(
            littleThingsScene,
            timelineScene
        );

    });
}
/* =========================================
   SCENE 6 → SCENE 7
   MARCH 22 → JUST BEING US
========================================= */

if (timelineBtn) {

    timelineBtn.addEventListener("click", function () {

        switchScene(
            timelineScene,
            usScene
        );

    });

}
/* =========================================
   SCENE 7 → SCENE 8
   JUST BEING US → LETTER
========================================= */

if (usBtn) {

    usBtn.addEventListener("click", function () {

        switchScene(
            usScene,
            letterScene
        );

    });

}

/* =========================================
   SCENE 7 → SCENE 8
   MEMORIES → LETTER
========================================= */

if (letterBtn) {

    letterBtn.addEventListener("click", function () {

        switchScene(
            letterScene,
            revealScene
        );

    });
}


/* =========================================
   SCENE 8 → SCENE 9
   LETTER → REVEAL
========================================= */

if (revealBtn) {

    revealBtn.addEventListener("click", function () {

        switchScene(
            revealScene,
            finalScene,
            1200
        );

    });
}


/* =========================================
   PAGE READY
========================================= */

console.log("Our Story website loaded successfully.");