const random_texts = [
    "ping @trhrichard if u want something idk",
    "hi there",
    ":SubaruTeehee:",
    "jambo was here",
    "jambie guessed the word!",
    "harewataru guessed the word!",
    "so you know when you go to dinner?",
    "you can refresh the page for more messages",
    "give frazzle money",
    "estimated time: ∞"
]

document.querySelector("#randomtext").innerHTML = random_texts[Math.floor(Math.random() * random_texts.length)]