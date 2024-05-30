const clickerButton = document.querySelector("#clicker")
const shopButton = document.querySelector("#open-shop")
const moneyText = document.querySelector("#money-amount")

const shop = document.querySelector("#shop")
const shop_buttons = shop.querySelector("#buttons")
const statsDiv = document.querySelector("#stats")

shop.hidden = false

// :)
let stats = {
    multiplier: {
        name: "Multiplier",
        price: 10,
        value: 1,
        add_multiplier: 2
    },
    "auto-click": {
        name: "Autoclicker",
        price: 100,
        value: false,
    },
    toilets: {
        name: "Toilet",
        price: 100,
        value: 0,
        add_multiplier: 5,
    }
}

let money = 0

clickerButton.addEventListener("click", clicker_action)

shopButton.addEventListener("click",function() {
    console.log(shop) 
    shop.style.display = shop.style.display == "none" ? "" : "none" // = !shop.hidden 
    shopButton.innerText = shop.style.display == "none" ? "Close Shop" : "Open Shop"
}) 

function clicker_action() {
    money += (stats.multiplier.value + stats.toilets.value*10)
    update()
}

// Removes shop buttons then adds 
function update() {
    moneyText.innerText = `Money: ${money}`

    shop_buttons.innerHTML = ""
    statsDiv.innerHTML = ""

    for (let stat_id in stats) {
        let stat = stats[stat_id]
        
        let stat_text = document.createElement("text")
        stat_text.innerText = `${stat.name}: ${stat.value}`
        statsDiv.appendChild(stat_text)
        
        

        let new_button = document.createElement("button")
        new_button.id = stat_id
        new_button.type = "button"
        if (stat["purchased"] == true) { 
            new_button.textContent = `Purchased ${stat.name}!`
        } else {

            if (typeof(stat.value) == "boolean") {
                new_button.textContent = `Buy ${stat.name} for $${stat.price}`
            } else {
                new_button.textContent = `Buy 1 ${stat.name} for $${stat.price}`
            }

            
            new_button.addEventListener("click", () => {
                if (money >= stat.price) {
                    money -= stat.price
                    if (typeof(stat.value) == "boolean") {
                        stat.value = true
                        stat.purchased = true
                    } else {
                        stat.value ++
                        stat.price *= stat.add_multiplier
                    }
                    
                    update()
                }
            })
        }

        shop_buttons.appendChild(new_button)


    }
}

function autoClicker() {
    if (stats["auto-click"].value == true) {
        clicker_action()
    }
}

update()
setInterval(autoClicker, 1000)