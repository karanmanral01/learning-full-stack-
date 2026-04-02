let lis = document.querySelectorAll("li");
lis.forEach(function (val) {
    console.log(val.textContent);
});


document.querySelectorAll("li");
for (let i = 0; i < lis.length; i++) {
    console.log(lis[i].textContent);
}


let p = document.querySelector("p");

p.innerHTML = "<b>Updated</b> by javascript"


let img = document.querySelector("img");
// console.log(img.src);

console.log(img.getAttribute("src"));



document.querySelector("img").setAttribute("src", "https://images.unsplash.com/photo-1773698403328-e6891737b7dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2Mnx8fGVufDB8fHx8fA%3D%3D");


let a = document.querySelector("a");
a.href = "https://www.sheryians.com";


let div = document.querySelector("div");
div.setAttribute("title", "some info");


 let button = document.querySelector("button");
 button.removeAttribute("disabled");


let h1 = document.querySelector("h1");
console.log(h1);


let ul = document.querySelector("ul");
let li = document.createElement("li");

li.textContent = "New Task";

ul.appendChild(li);


let img = document.createElement("img");

img.setAttribute("src", "https://imgs.search.brave.com/NhjBBl2ehL7hm_7MCpz0ao_uHwMR1LFeXY2ZCc53yHE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9yYWxm/dmFudmVlbi5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjEv/MDYvUGxhY2Vob2xk/ZXItXy1HbG9zc2Fy/eS5zdmc");


document.querySelector("div").prepend(img);



let ul = document.querySelector("ul");

let li = document.querySelector("li");

ul.removeChild(li);



let li = document.querySelectorAll("ul li:nth-child(2n)");
li.forEach(function(elem){
    elem.classList.add("highlight");
});



let p = document.querySelectorAll("p");
p.forEach(function(elem){
    elem.style.fontsize = "20px";
});
