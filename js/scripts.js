let container = document.querySelectorAll(".container");
let p = document.querySelectorAll("p");

const appear = function (){
    p.classList.add("affiche")
};

container.forEach(container =>{
    container.addEventListener("mouseover",appear)
});


