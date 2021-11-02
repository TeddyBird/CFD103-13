let newsIndex = 0;
function carousel() {
    let newsPics = document.getElementsByClassName("news-pic");
    let titPointers = document.getElementsByClassName("fa-caret-left");
    let newsTitles = document.querySelectorAll(".news-title a");
    for (let i = 0; i < newsPics.length; i++) {
        newsPics[i].style.opacity = "0";  
        titPointers[i].style.opacity="0";
        titPointers[i].style.transform="translateX(18px)";
        newsTitles[i].style.color="rgb(185, 142, 81)";
    }
    newsIndex++;
    if (newsIndex > newsPics.length) {
         newsIndex = 1;
        newsPics[newsIndex-1].style.opacity = "1";
        titPointers[newsIndex-1].style.opacity = "1";
        titPointers[newsIndex-1].style.transform="translateX(5px)";
        titPointers[newsIndex-1].style.transition="transform 0.5s"
        newsTitles[newsIndex-1].style.color="rgb(240, 156, 56)";
    }else{
        newsPics[newsIndex-1].style.opacity = "1";
        titPointers[newsIndex-1].style.opacity = "1";
        titPointers[newsIndex-1].style.transform="translateX(5px)";
        titPointers[newsIndex-1].style.transition="transform 0.5s"
        newsTitles[newsIndex-1].style.color="rgb(240, 156, 56)";
     }
    setTimeout(carousel, 2500);
}

function fadeIn(){
    let aboutTxt = document.querySelector(".about-txt");
    let aboutPic = document.querySelector(".about-pic");
    let info = document.querySelector(".info");
    let calendar = document.querySelector(".calendar")
    let pageTop = document.querySelector(".pagetop")
    if(document.documentElement.scrollTop > 1650){
        aboutTxt.style.left = "0";
        aboutTxt.style.opacity = "1";
        aboutPic.style.left = "0";
        aboutPic.style.opacity="1";
    }else{
        aboutTxt.style.left = "-80%";
        aboutTxt.style.opacity = "0";
        aboutPic.style.left = "-80%";
        aboutPic.style.opacity="0";
    }

    if(document.documentElement.scrollTop > 2300){
        info.style.bottom = "0";
        info.style.opacity = "1";
        calendar.style.bottom = "0";
        calendar.style.opacity="1";
    }else{
        info.style.bottom = "-80%";
        info.style.opacity = "0";
        calendar.style.bottom = "-80%";
        calendar.style.opacity="0";
    }

    if(document.documentElement.scrollTop > 0){
        pageTop.classList.add("show-pagetop");
    }else{
        pageTop.classList.remove("show-pagetop");
    }
}

function goTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function init(){
    document.querySelector(".pagetop").onclick = goTop;
    carousel();
    window.onscroll = fadeIn;
}

window.addEventListener("load", init, false);