
const para = document.querySelector("p")
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
const text = para.innerText

let iteration = 0
let interval = null

para.addEventListener('mouseenter', () => {

    iteration = 0
    clearInterval(interval)

    interval = setInterval(() => {

        const str = text.split("").map((char, index) => {
            if (index < iteration) {
                return char
            }

            return characters.split("")[Math.floor(Math.random() * 53)]
        }).join("")

        para.innerText = str

        iteration += 0.2
    }, 30)

})