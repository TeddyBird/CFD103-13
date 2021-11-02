function openAside(e){
    let category = e.target;
    category.classList.toggle("active");
}
function init(){
    let  categories = document.querySelectorAll(".first-sort > li h4");
    for(let i = 0; i < categories.length; i++){
        categories[i].onclick = openAside;
    }
}
 window.addEventListener("load", init, false);
