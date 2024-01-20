const menu = document.querySelector("#myMenu")
const h2 = document.querySelector(".content>h2")

document.querySelector("#search").addEventListener('input',(e)=>{
    for(let i = 0; i < menu.children.length; ++i){
        let item = menu.children[i]
        if(item.innerText.match(e.target.value.toUpperCase())){
            item.style.display = 'block'
        }else{
            item.style.display = 'none'
        }
    }
})

for(let i = 0; i < menu.children.length; ++i){
    let item = menu.children[i]
    item.addEventListener('click', ()=>{
        h2.innerText = item.innerText + ' content'
    })
}