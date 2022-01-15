function showLarge(e){
    let small = e.target;
    document.querySelector(".main-pic img").src = small.src;
}

function showNutrition(){
    document.querySelector(".nutrition").style.display="block";
}
function closeNutrition(){
    document.querySelector(".nutrition").style.display="none";
}

function init(){
    let imgs = document.querySelectorAll(".switch-pic img")
    for(let i=0; i<imgs.length; i++){
        imgs[i].onclick = showLarge;
    }
    document.querySelector(".nutrition-btn").onclick = showNutrition;
    document.querySelector(".close-nutrition").onclick = closeNutrition;
    // document.querySelector(".minus-btn").onclick = clickMinus;
    // document.querySelector(".plus-btn").onclick = clickPlus;
    // document.querySelector(".buybtn").onclick = addCart;
    document.querySelector(".shopcart-icon").onclick = clickCart;
}
window.addEventListener("load",init,false);