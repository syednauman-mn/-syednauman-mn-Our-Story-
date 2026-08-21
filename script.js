/* =========================================
   SCENE ELEMENTS
========================================= */

const opening =
    document.getElementById("opening");

const enterBtn =
    document.getElementById("enterBtn");


const story =
    document.getElementById("story");

const continueBtn =
    document.getElementById("continueBtn");


const pageScene =
    document.getElementById("pageScene");

const chapterBtn =
    document.getElementById("chapterBtn");


const memoryScene =
    document.getElementById("memoryScene");

const openMemoryBtn =
    document.getElementById("openMemoryBtn");


const littleThingsScene =
    document.getElementById("littleThingsScene");

const littleThingsBtn =
    document.getElementById("littleThingsBtn");


const revealScene =
    document.getElementById("revealScene");

const revealBtn =
    document.getElementById("revealBtn");

    const finalScene =
    document.getElementById("finalScene");
    
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

    if (timerStarted) {
        return;
    }

    timerStarted = true;

    updateTimer();

    setInterval(updateTimer, 1000);

}


function updateTimer() {

    const now =
        new Date();

    let difference =
        now.getTime() -
        startDate.getTime();


    if (difference < 0) {

        difference = 0;

    }


    const totalSeconds =
        Math.floor(
            difference / 1000
        );


    const days =
        Math.floor(
            totalSeconds / 86400
        );


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



    document.getElementById("days")
        .textContent = days;


    document.getElementById("hours")
        .textContent =
        String(hours)
            .padStart(2, "0");


    document.getElementById("minutes")
        .textContent =
        String(minutes)
            .padStart(2, "0");


    document.getElementById("seconds")
        .textContent =
        String(seconds)
            .padStart(2, "0");

}



/* =========================================
   SCENE 1 → SCENE 2
========================================= */

enterBtn.addEventListener(
    "click",
    function () {

        opening.classList.add("hide");


        setTimeout(
            function () {

                story.classList.add("show");

                startTimer();

            },
            900
        );

    }
);



/* =========================================
   SCENE 2 → SCENE 3
========================================= */

continueBtn.addEventListener(
    "click",
    function () {

        story.classList.remove("show");


        setTimeout(
            function () {

                pageScene.classList.add("show");

            },
            800
        );

    }
);



/* =========================================
   SCENE 3 → SCENE 4
========================================= */

chapterBtn.addEventListener(
    "click",
    function () {

        pageScene.classList.remove("show");


        setTimeout(
            function () {

                memoryScene.classList.add("show");

            },
            800
        );

    }
);



/* =========================================
   SCENE 4 → SCENE 5
========================================= */

openMemoryBtn.addEventListener(
    "click",
    function () {

        memoryScene.classList.remove("show");


        setTimeout(
            function () {

                littleThingsScene.classList.add("show");

                littleThingsScene.scrollTop = 0;

            },
            800
        );

    }
);


/* =========================================
   SCENE 5 → SCENE 6
========================================= */

const timelineScene =
    document.getElementById("timelineScene");

const timelineBtn =
    document.getElementById("timelineBtn");


littleThingsBtn.addEventListener(
    "click",
    function () {

        littleThingsScene.classList.remove("show");

        setTimeout(
            function () {

                timelineScene.classList.add("show");

                timelineScene.scrollTop = 0;

            },
            800
        );

    }
);
/* =========================================
   SCENE 6 → SCENE 7
========================================= */

const letterScene =
    document.getElementById("letterScene");

const letterBtn =
    document.getElementById("letterBtn");


timelineBtn.addEventListener(
    "click",
    function () {

        timelineScene.classList.remove("show");

        setTimeout(
            function () {

                letterScene.classList.add("show");

                letterScene.scrollTop = 0;

            },
            800
        );

    }
);
/* =========================================
   SCENE 7 → SCENE 8
========================================= */

function showRevealScene() {

    /* Hide Scene 7 */

    const letterScene =
        document.getElementById("letterScene");

    if (letterScene) {

        letterScene.classList.remove("show");

    }


    /* Show Scene 8 */

    setTimeout(
        function () {

            revealScene.classList.add("show");

        },
        800
    );

}
/* =========================================
   SCENE 7 → SCENE 8
========================================= */

letterBtn.addEventListener(
    "click",
    function () {

        letterScene.classList.remove("show");

        setTimeout(
            function () {

                revealScene.classList.add("show");

            },
            800
        );

    }
);
/* =========================================
   SCENE 8 → SCENE 9
========================================= */

revealBtn.addEventListener(
    "click",
    function () {

        revealScene.classList.remove("show");

        setTimeout(
            function () {

                finalScene.classList.add("show");

            },
            1200
        );

    }
);