let btn = document.querySelector("button")
let main = document.querySelector("main")

let arr = ['Dream big, start small.', 'thik like a devloper', 'belileve and build', 'Debug your limits', 'Stay hungry, stay lerstning', 'Success needs consistency']

btn.addEventListener('click', function () {

    let h1 = document.createElement('h1')

    let x = Math.floor(Math.random() * 80)
    let y = Math.floor(Math.random() * 80)
    let r = Math.floor(Math.random() * 360)
    let scl = Math.floor(Math.random() * 4)
    let a = Math.floor(Math.random() * arr.length)

    h1.innerHTML = arr[a];

    h1.style.position = "absolute"

    h1.style.left = x + '%'
    h1.style.top = y + '%'
    h1.style.rotate = r + 'deg'
    h1.style.scale = scl

    main.appendChild(h1)
})
