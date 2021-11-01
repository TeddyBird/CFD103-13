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


function clickMinus(){
    let buyNum = document.querySelector(".counter-bar input").value;
    if(buyNum == 1){
        document.querySelector(".counter-bar input").value = 1;
    }else{
        buyNum--;
        document.querySelector(".counter-bar input").value = buyNum;
    }
}
function clickPlus(){
    let buyNum = document.querySelector(".counter-bar input").value;
    buyNum++;
    document.querySelector(".counter-bar input").value = buyNum;
}


function addCart(){
    let buyNum = document.querySelector(".counter-bar input").value;
    let shopcartAlert = document.querySelector(".shopcart-alert");
    alert("已加入購物車");
    buyNum = 1;
    document.querySelector(".counter-bar input").value = buyNum;
    shopcartAlert.style.display="block";
    shopcartAlert.innerText = parseInt(shopcartAlert.innerText) + 1; 
}

function  clickCart(){
    let shopcartAlert = document.querySelector(".shopcart-alert");
    shopcartAlert.style.display="none";
    shopcartAlert.innerText = 0; 
}

function init(){
    let imgs = document.querySelectorAll(".switch-pic img")
    for(let i=0; i<imgs.length; i++){
        imgs[i].onclick = showLarge;
    }
    document.querySelector(".nutrition-btn").onclick = showNutrition;
    document.querySelector(".close-nutrition").onclick = closeNutrition;
    document.querySelector(".minus-btn").onclick = clickMinus;
    document.querySelector(".plus-btn").onclick = clickPlus;
    document.querySelector(".buybtn").onclick = addCart;
    document.querySelector(".shopcart-icon").onclick = clickCart;
}
window.addEventListener("load",init,false);