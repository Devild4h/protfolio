let menu = document.getElementById("menu")
let ul = document.getElementById("actions")
menu.addEventListener("click",()=>{
    hudelmune()
})
function hudelmune(){
    menu.classList.toggle("is-active")
    ul.classList.toggle("is-active")
}