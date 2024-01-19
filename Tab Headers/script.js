let activeTab = document.querySelector("#London")
let activeBtn = document.querySelector(".btn-1")

function handleTabs(curr, id, colorHex){
    let currentTab = document.querySelector(`#${id}`)

    activeTab.classList.toggle('hide')
    currentTab.classList.toggle('hide')

    activeBtn.style.backgroundColor = "#fff"
    currentTab.style.backgroundColor = colorHex
    curr.style.backgroundColor = colorHex

    activeBtn = curr
    activeTab = currentTab
}