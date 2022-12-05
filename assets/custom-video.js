let yt = document.querySelector("#youtube-player");

document.addEventListener("click", () => {
  let command = {
    event: "command",
    func: "pauseVideo",
  };

  yt.contentWindow.postMessage(JSON.stringify(command), "*");
});
