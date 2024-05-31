document.querySelector("#play-mc2d")?.addEventListener("click", () => {
    window.location.href = "minecraft2d"
})

document.querySelector("#play-clicker")?.addEventListener("click", () => {
    window.location.href = "clicker"
})

const random_texts = [
    "So you know when you go to dinner?",
    "the clicker game is so good dude",
    "dont mind my bad html i still dont know how to make websites",
    "i dont know what to write anymore this should be good for now",
    "...",
    ":oke:",
    "https://trhrichard.github.io/anime/that-one-nijika-video.mp4",
    "https://trhrichard.github.io/anime/fuwafuwa.mp4"
]

document.querySelector("#randomtext").innerHTML = random_texts[Math.floor(Math.random() * random_texts.length)]