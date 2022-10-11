

let menu = document.getElementById("menu");
let nav = document.querySelector("nav ul");
console.log(nav)




menu.addEventListener("click",()=>{
    nav.classList.toggle("nav_show");
    menu.classList.toggle("fixed");
   
})



