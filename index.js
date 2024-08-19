const random_texts = [
    "ping @trhrichard if u want something idk",
    "hi there",
    ":SubaruTeehee:"
]

document.querySelector("#randomtext").innerHTML = random_texts[Math.floor(Math.random() * random_texts.length)]