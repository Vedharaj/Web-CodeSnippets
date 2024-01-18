let curActive = document.querySelector(".active")
let curTab = 'London'

function toggleClass(curr, id) {
    if(curr !== curActive){
        curActive.classList.remove('active')
        document.querySelector(`#${curTab}`).classList.remove('unhide')
        curr.classList.add("active")
        document.querySelector(`#${id}`).classList.add('unhide')
        curActive = curr
        curTab = id
    }
}