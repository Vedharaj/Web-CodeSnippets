const verticalBar = document.querySelectorAll('.vertical-bar > a')
let activeVerticalIcon = verticalBar[0]
verticalBar.forEach((e)=>{
  e.addEventListener('click', function(){
    if (this !== activeVerticalIcon){
      activeVerticalIcon.classList.remove("active")
      this.classList.add('active')
      activeVerticalIcon = this
    }
})
})

const horizontalBar = document.querySelectorAll('.horizontal-bar > a')
let activeHorizontalIcon = horizontalBar[0]
horizontalBar.forEach((e)=>{
  e.addEventListener('click', function(){
    if (this !== activeHorizontalIcon){
     activeHorizontalIcon.classList.remove("active")
      this.classList.add('active')
      activeHorizontalIcon = this
    }
})
})