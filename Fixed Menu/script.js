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