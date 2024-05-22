const drums = document.querySelectorAll(".btn-w")

drums.forEach((drums) => {
    drums.addEventListener("click",() => {
        const crash = new Audio("./sounds/crash.mp3");
        crash.play();
    })
})