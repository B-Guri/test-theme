let playerContainer = document.querySelector(".custom-video__content");

playerContainer.addEventListener("click", () => {
  let player = playerContainer.querySelector(".video-player");
  let playButton = playerContainer.querySelector(".play-button");
  // player = document.querySelector(".video-player");
  console.log("click");
  let command;
  if (playButton.classList.contains("on-pause")) {
    if (player.classList.contains("yt")) {
      command = playVideo("youtube");
    } else if (player.classList.contains("vm")) {
      command = playVideo("vimeo");
    } else {
      player.play();
    }
  } else {
    if (player.classList.contains("yt")) {
      command = pauseVideo("youtube");
    } else if (player.classList.contains("vm")) {
      command = pauseVideo("vimeo");
    } else {
      player.pause();
    }
  }
  playButton.classList.toggle("on-pause");
  if (command) player.contentWindow.postMessage(JSON.stringify(command), "*");
});

function pauseVideo(platform) {
  let command;
  if (platform == "youtube") {
    command = {
      event: "command",
      func: "pauseVideo",
    };
  } else if (platform == "vimeo") {
    command = {
      method: "pause",
      value: "true",
    };
  }
  return command;
}

function playVideo(platform) {
  let command;
  if (platform == "youtube") {
    command = {
      event: "command",
      func: "playVideo",
    };
  } else if (platform == "vimeo") {
    command = {
      method: "play",
      value: "true",
    };
  }
  return command;
}
