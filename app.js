const drum = document.querySelectorAll(".drum")

const pressedButton = (key) => {
  const btn = document.querySelector(".${key")

  setTimeout(() => {
    btn.classList.remove("pressed")
  },100)
}


const buttons = document.querySelectorAll("button");
const obJek = { w: "crash",a: "kick-bass",s: "snare",d: "tom-1",j: "tom-2",k:"tom-3",l: "tom-4",
};
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    for (key in obJek) {
      if (button.textContent == key) {
        let beat = new Audio(`./sounds/${obJek[key]}.mp3`);
        beat.play();
      }
    }
  });
});

document.addEventListener("keydown", (e) => {
  for (key in obJek) {
    if (e.key == key) {
      buttons.forEach((button) => {
        if (button.textContent == key) {
          button.classList.add("scaled");
          setTimeout(() => {
            button.classList.remove("scaled");
          }, 100);
        }
      });
      let beat = new Audio(`./sounds/${obJek[key]}.mp3`);
      beat.play();
    }
  }
});
