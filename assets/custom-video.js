let playerContainer = document.querySelector(".custom-video__content");
let player;
let playButton = document.querySelector(".play-button");

playerContainer.addEventListener("click", () => {
  player = document.querySelector(".video-player");
  let command;
  if (playButton.classList.contains("on-pause")) {
    if (player.classList.contains("yt")) {
      command = {
        event: "command",
        func: "playVideo",
      };
    } else if (player.classList.contains("vm")) {
      console.log("CLICK vm");
      command = {
        method: "play",
        value: "true",
      };
    }
  } else {
    if (player.classList.contains("yt")) {
      command = {
        event: "command",
        func: "pauseVideo",
      };
    } else if (player.classList.contains("vm")) {
      command = {
        method: "pause",
        value: "true",
      };
    }
  }
  playButton.classList.toggle("on-pause");
  player.contentWindow.postMessage(JSON.stringify(command), "*");
});
