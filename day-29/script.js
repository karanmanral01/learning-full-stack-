function debounce(fn, dealy){
    let timer;
    return function(){
        clearTimeout(timer);
        timer = setTimeout(fn, dealy);
    };
}


document.querySelector("#search")
.addEventListener(
    "input",
    debounce(function(){
        console.log("chalte raho");
    },400)
);



function throttle(fn, delay) {
    let last = 0;
    return function () {
        const now = Date.now();
        if (now - last >= delay) {
            last = now;
            fn();
        }
    };
}


window.addEventListener("mousemove",
    throttle(function () {
        console.log("karan");
    }, 2000)
);