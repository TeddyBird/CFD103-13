function showTxt(){
    let txts = document.querySelectorAll(".feature-content");
    for(let i = 0; i < txts.length; i++){
        if(document.documentElement.scrollTop > (1050 + i*420)){
            txts[i].classList.add("showdetail");
        }else{
            txts[i].classList.remove("showdetail");
        }
    }
    let concept = document.querySelector(".concept .txt");
    if(document.documentElement.scrollTop > 300){
    concept.style.opacity = "1";
    concept.style.bottom = "-150px";
    concept.style.left = "-100px";
    }else{
    concept.style.opacity = "0";
    concept.style.bottom = "-300px";
    concept.style.left = "-50px";
    }
}


function init(){
    window.onscroll = showTxt;
}
window.addEventListener("load", init, false);