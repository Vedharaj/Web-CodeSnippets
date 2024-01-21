const sidebar = document.querySelector(".sidebar")

function openNav() {
    if(sidebar.classList.contains('overlay-nav')){
        sidebar.classList.remove("overlay-nav")
    }
    sidebar.classList.toggle("hide")
}

function overlayNav(){
    if(sidebar.classList.contains('hide')){
        sidebar.classList.remove("hide")
    }
    sidebar.classList.toggle("overlay-nav")
}

function closeNav() {
    sidebar.classList.add("hide")
}