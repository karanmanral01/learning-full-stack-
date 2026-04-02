let inc = document.querySelector("#Inc")
let dec = document.querySelector("#dec")
let rec = document.querySelector("#rec")
let h2 = document.querySelector("h2")

let a = 0; 

inc.addEventListener('click', function(){
    a++
    console.log(a);
    h2.innerHTML = a
})

dec.addEventListener('click', function(){
   if(a>0){ a--
    console.log(a);
    h2.innerHTML = a

   }
})

rec.addEventListener('click', function(){
    a = 0
    console.log(a);
    h2.innerHTML = a
})