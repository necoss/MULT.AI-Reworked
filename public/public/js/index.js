const audio = document.querySelector(".navigation_music");
const audioButton = document.querySelector(".navigation-right__music-button");
const lordIcon = document.querySelector("lord-icon");

audio.volume = 0.1;

function playAudio() {
  audioButton.addEventListener("click", () => {
    audioButton.classList.toggle("playing");
    audioButton.style.transition = ".5s ease";
    audio.paused ? audio.play() : audio.pause();

    if (audioButton.classList.contains("playing")) {
      lordIcon.colors = "primary:#f0f1fa";
    } else {
      lordIcon.colors = "primary:#262626";
    }
  });
}
document.querySelector(".seasons_series_all_play").addEventListener("click", () => {
  const gameDemo = document.querySelector(".game-demo");
  gameDemo.style.display = "block";
  gameDemo.scrollIntoView({ behavior: "smooth" });
});
playAudio();

// Episodes
if (document.documentElement.clientWidth >= 1200) {
  //2
  document.querySelector(".seasons_series_2").addEventListener("mouseover", () => {
    document.querySelector(".seasons_series_1").style.width = "20vw";
    document.querySelector(".seasons_series_1 .seasons_series_all_preview").style.opacity = "1";

    document.querySelector(".seasons_series_2 .seasons_series_all_preview").style.opacity = "0";

    const elements = document.querySelectorAll(".seasons_series_2 .seasons-content");
    for (let elem of elements) {
      elem.style.opacity = "1";
    }

    const elements1 = document.querySelectorAll(".seasons_series_1 .seasons-content");
    for (let elem of elements1) {
      elem.style.opacity = "0";
    }

    console.log(123);
  });

  document.querySelector(".seasons_series_2").addEventListener("mouseleave", () => {
    document.querySelector(".seasons_series_1").style.width = "calc(100vw / 3)";
    document.querySelector(".seasons_series_1 .seasons_series_all_preview").style.opacity = "0";

    document.querySelector(".seasons_series_2 .seasons_series_all_preview").style.opacity = "1";

    const elements = document.querySelectorAll(".seasons_series_2 .seasons-content");
    for (let elem of elements) {
      elem.style.opacity = "0";
    }

    const elements1 = document.querySelectorAll(".seasons_series_1 .seasons-content");
    for (let elem of elements1) {
      elem.style.opacity = "1";
    }
  });

  //3
  document.querySelector(".seasons_series_3").addEventListener("mouseover", () => {
    document.querySelector(".seasons_series_1").style.width = "20vw";
    document.querySelector(".seasons_series_1 .seasons_series_all_preview").style.opacity = "1";

    document.querySelector(".seasons_series_3 .seasons_series_all_preview").style.opacity = "0";

    const elements = document.querySelectorAll(".seasons_series_3 .seasons-content");
    for (let elem of elements) {
      elem.style.opacity = "1";
    }

    const elements1 = document.querySelectorAll(".seasons_series_1 .seasons-content");
    for (let elem of elements1) {
      elem.style.opacity = "0";
    }
  });

  document.querySelector(".seasons_series_3").addEventListener("mouseleave", () => {
    document.querySelector(".seasons_series_1").style.width = "calc(100vw / 3)";
    document.querySelector(".seasons_series_1 .seasons_series_all_preview").style.opacity = "0";

    document.querySelector(".seasons_series_3 .seasons_series_all_preview").style.opacity = "1";

    const elements = document.querySelectorAll(".seasons_series_3 .seasons-content");
    for (let elem of elements) {
      elem.style.opacity = "0";
    }

    const elements1 = document.querySelectorAll(".seasons_series_1 .seasons-content");
    for (let elem of elements1) {
      elem.style.opacity = "1";
    }
  });

  //4
  document.querySelector(".seasons_series_4").addEventListener("mouseover", () => {
    document.querySelector(".seasons_series_1").style.width = "20vw";
    document.querySelector(".seasons_series_1 .seasons_series_all_preview").style.opacity = "1";

    document.querySelector(".seasons_series_4 .seasons_series_all_preview").style.opacity = "0";

    const elements = document.querySelectorAll(".seasons_series_4 .seasons-content");
    for (let elem of elements) {
      elem.style.opacity = "1";
    }

    const elements1 = document.querySelectorAll(".seasons_series_1 .seasons-content");
    for (let elem of elements1) {
      elem.style.opacity = "0";
    }
  });

  document.querySelector(".seasons_series_4").addEventListener("mouseleave", () => {
    document.querySelector(".seasons_series_1").style.width = "calc(100vw / 3)";
    document.querySelector(".seasons_series_1 .seasons_series_all_preview").style.opacity = "0";

    document.querySelector(".seasons_series_4 .seasons_series_all_preview").style.opacity = "1";

    const elements = document.querySelectorAll(".seasons_series_4 .seasons-content");
    for (let elem of elements) {
      elem.style.opacity = "0";
    }

    const elements1 = document.querySelectorAll(".seasons_series_1 .seasons-content");
    for (let elem of elements1) {
      elem.style.opacity = "1";
    }
  });

  //5
  document.querySelector(".seasons_series_5").addEventListener("mouseover", () => {
    document.querySelector(".seasons_series_1").style.width = "20vw";
    document.querySelector(".seasons_series_1 .seasons_series_all_preview").style.opacity = "1";

    document.querySelector(".seasons_series_5 .seasons_series_all_preview").style.opacity = "0";

    const elements = document.querySelectorAll(".seasons_series_5 .seasons-content");
    for (let elem of elements) {
      elem.style.opacity = "1";
    }

    const elements1 = document.querySelectorAll(".seasons_series_1 .seasons-content");
    for (let elem of elements1) {
      elem.style.opacity = "0";
    }
  });

  document.querySelector(".seasons_series_5").addEventListener("mouseleave", () => {
    document.querySelector(".seasons_series_1").style.width = "calc(100vw / 3)";
    document.querySelector(".seasons_series_1 .seasons_series_all_preview").style.opacity = "0";

    document.querySelector(".seasons_series_5 .seasons_series_all_preview").style.opacity = "1";

    const elements = document.querySelectorAll(".seasons_series_5 .seasons-content");
    for (let elem of elements) {
      elem.style.opacity = "0";
    }

    const elements1 = document.querySelectorAll(".seasons_series_1 .seasons-content");
    for (let elem of elements1) {
      elem.style.opacity = "1";
    }
  });
} else {
  console.log("Экран меньше обычных ноутов (1200px)");

  //1 <1200px
  document.querySelector(".seasons_series_1").addEventListener("click", () => {
    document.querySelector(".seasons_series_1").style.height = "66vh";
    document.querySelector(".seasons_series_2").style.height = "25vh";
    document.querySelector(".seasons_series_3").style.height = "25vh";
    document.querySelector(".seasons_series_4").style.height = "25vh";
    document.querySelector(".seasons_series_5").style.height = "25vh";

    document.querySelector(".seasons_series_1 .seasons_series_all_preview").style.opacity = "1";

    document.querySelector(".seasons_series_1 .seasons_series_all_preview").style.opacity = "0";

    const elements = document.querySelectorAll(".seasons_series_1 .seasons-content");
    for (let elem of elements) {
      elem.style.opacity = "0";
    }

    const elements1 = document.querySelectorAll(".seasons_series_1 .seasons-content");
    for (let elem of elements1) {
      elem.style.opacity = "1";
    }
  });

  //2 <1200xp
  document.querySelector(".seasons_series_2").addEventListener("click", () => {
    document.querySelector(".seasons_series_1").style.height = "25vh";
    document.querySelector(".seasons_series_2").style.height = "66vh";
    document.querySelector(".seasons_series_3").style.height = "25vh";
    document.querySelector(".seasons_series_4").style.height = "25vh";
    document.querySelector(".seasons_series_5").style.height = "25vh";
    document.querySelector(".seasons_series_1 .seasons_series_all_preview").style.opacity = "1";

    document.querySelector(".seasons_series_2 .seasons_series_all_preview").style.opacity = "0";

    const elements = document.querySelectorAll(".seasons_series_2 .seasons-content");
    for (let elem of elements) {
      elem.style.opacity = "1";
    }

    const elements1 = document.querySelectorAll(".seasons_series_1 .seasons-content");
    for (let elem of elements1) {
      elem.style.opacity = "0";
    }

    console.log(123);
  });

  //3 <1200px
  document.querySelector(".seasons_series_3").addEventListener("click", () => {
    document.querySelector(".seasons_series_1").style.height = "25vh";
    document.querySelector(".seasons_series_2").style.height = "25vh";
    document.querySelector(".seasons_series_3").style.height = "66vh";
    document.querySelector(".seasons_series_4").style.height = "25vh";
    document.querySelector(".seasons_series_5").style.height = "25vh";

    document.querySelector(".seasons_series_1 .seasons_series_all_preview").style.opacity = "1";

    document.querySelector(".seasons_series_3 .seasons_series_all_preview").style.opacity = "0";

    const elements = document.querySelectorAll(".seasons_series_3 .seasons-content");
    for (let elem of elements) {
      elem.style.opacity = "1";
    }

    const elements1 = document.querySelectorAll(".seasons_series_1 .seasons-content");
    for (let elem of elements1) {
      elem.style.opacity = "0";
    }
  });

  //4 <1200px
  document.querySelector(".seasons_series_4").addEventListener("click", () => {
    document.querySelector(".seasons_series_1").style.height = "25vh";
    document.querySelector(".seasons_series_2").style.height = "25vh";
    document.querySelector(".seasons_series_3").style.height = "25vh";
    document.querySelector(".seasons_series_4").style.height = "66vh";
    document.querySelector(".seasons_series_5").style.height = "25vh";

    document.querySelector(".seasons_series_1 .seasons_series_all_preview").style.opacity = "1";

    document.querySelector(".seasons_series_4 .seasons_series_all_preview").style.opacity = "0";

    const elements = document.querySelectorAll(".seasons_series_4 .seasons-content");
    for (let elem of elements) {
      elem.style.opacity = "1";
    }

    const elements1 = document.querySelectorAll(".seasons_series_1 .seasons-content");
    for (let elem of elements1) {
      elem.style.opacity = "0";
    }
  });

  //4 <1200px
  document.querySelector(".seasons_series_5").addEventListener("click", () => {
    document.querySelector(".seasons_series_1").style.height = "25vh";
    document.querySelector(".seasons_series_2").style.height = "25vh";
    document.querySelector(".seasons_series_3").style.height = "25vh";
    document.querySelector(".seasons_series_4").style.height = "25vh";
    document.querySelector(".seasons_series_5").style.height = "66vh";

    document.querySelector(".seasons_series_1 .seasons_series_all_preview").style.opacity = "1";

    document.querySelector(".seasons_series_5 .seasons_series_all_preview").style.opacity = "0";

    const elements = document.querySelectorAll(".seasons_series_5 .seasons-content");
    for (let elem of elements) {
      elem.style.opacity = "1";
    }

    const elements1 = document.querySelectorAll(".seasons_series_1 .seasons-content");
    for (let elem of elements1) {
      elem.style.opacity = "0";
    }
  });
}
