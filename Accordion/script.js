const p1 = document.querySelector(".para-1")
const p2 = document.querySelector(".para-2")
const p3 = document.querySelector(".para-3")

const o1 = document.querySelector(".overlay-1")
const o2 = document.querySelector(".overlay-2")
const o3 = document.querySelector(".overlay-3")

function handleAccortion(h) {
    if(h==="h1"){
        p1.classList.toggle("hide")
        o1.classList.toggle("hide")
    } else if(h==="h2"){
        p2.classList.toggle("hide")
        o2.classList.toggle("hide")
    } else if(h==="h3"){
        p3.classList.toggle("hide")
        o3.classList.toggle("hide")    
    }
}