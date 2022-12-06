let playerContainers = document.querySelectorAll(".custom-video__content");

for (let i = 0; i < playerContainers.length; i++) {
  playerContainers[i].addEventListener("click", () => {
    let player = playerContainers[i].querySelector(".video-player");
    let playButton = playerContainers[i].querySelector(".play-button");
    // player = document.querySelector(".video-player");
    console.log("click");
    let command;
    if (playButton.classList.contains("on-pause")) {
      if (player.classList.contains("yt")) {
        command = playVideo("youtube");
      } else if (player.classList.contains("vm")) {
        command = playVideo("vimeo");
      }
    } else {
      if (player.classList.contains("yt")) {
        command = pauseVideo("youtube");
      } else if (player.classList.contains("vm")) {
        command = pauseVideo("vimeo");
      }
    }
    playButton.classList.toggle("on-pause");
    player.contentWindow.postMessage(JSON.stringify(command), "*");
  });
}

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
