let btn = document.querySelector("button")
let main = document.querySelector("main")

btn.addEventListener('click', () => {
    let div = document.createElement("div")

    let x = Math.floor(Math.random() * 100)
    let y = Math.floor(Math.random() * 100)
    let r = Math.floor(Math.random() * 360)
    let c1 = Math.floor(Math.random() * 256)
    let c2 = Math.floor(Math.random() * 256)
    let c3 = Math.floor(Math.random() * 256)

    div.style.height = '50px'
    div.style.width = '50px'
    div.style.position = 'absolute'
    div.style.left = x + '%'
    div.style.top = y + '%'
    div.style.rotate = r + 'deg'
    div.style.backgroundColor = `rgb(${c1}, ${c2}, ${c3}) `

    main.appendChild(div);
})