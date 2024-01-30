const lst = document.querySelectorAll("li")
const content=document.querySelector(".content h2")
let activeLst = document.querySelector(".sel-li")

lst.forEach(i=>{
    i.addEventListener('click', (e)=>{
        if (e.target != activeLst){
            activeLst.classList.remove('sel-li')
            activeLst = e.target
            e.target.classList.add('sel-li')
            content.innerText = e.target.innerText + ' Page'
        }
    })
})

window.onscroll = function(){scrollFunction()};

function scrollFunction() {
    if(document.documentElement.scrollTop > 20 || document.body.scrollTop >20){
        document.querySelector(".navbar").style.top = 0
    } else{
        document.querySelector(".navbar").style.top = "-50px"
    }
}

console.log(window.onscroll)