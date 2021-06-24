const btnMenu = document.querySelector(".btn-menu");
const menu = document.querySelector(".menu")


function openMenu(){
  menu.classList.toggle("active")
}
btnMenu.addEventListener("click",openMenu)