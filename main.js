let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");

closeBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    menuBtnChange();//calling the function(optional)
});

searchBtn.addEventListener("click", () => { // Sidebar open when you click on the search iocn
    sidebar.classList.toggle("open");
    menuBtnChange(); //calling the function(optional)
});

// following are the code to change sidebar button(optional)
function menuBtnChange() {
    if (sidebar.classList.contains("open")) {
        closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
    } else {
        closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");//replacing the iocns class
    }
}
// script song
var mysong = document.getElementById("mysong");
        var iconss = document.getElementById("iconss");
    iconss.addEventListener("click" , function(){
        if (mysong.paused) {
            mysong.play();
            iconss.src = "./img/pause.png";
        } else {
            mysong.pause();
            iconss.src = "./img/play.png";
        }
    })

    let toggle = document.querySelector(".toggle");
    let a = document.querySelectorAll("nav a");
    let small = document.querySelectorAll(".link-title small");
    let p = document.querySelector(".copyright p");
    function colorate(){
     for (let index = 0; index < a.length; index++) {
         a[index].style.color = "black";
     }
        document.querySelector("header").style.background = "white";
        document.querySelector("nav").style.background = "white";
        document.querySelector("body").style.background = "white";
        document.querySelector(".sidebar").style.background = "white";
        document.querySelector("#footer").style.background = "white";
        document.querySelector(".copyright").style.background = "white";
        document.getElementById("btn").style.background = "black";
        document.getElementById("btn").style.borderRadius = "30%";
        document.getElementById("btn").style.marginTop = "5px";
        p.style.color = "black";
        for (let index = 0; index < small.length; index++) {
            small[index].style.color = "black";
        }

    }
    function decolorate(){
        for (let index = 0; index < a.length; index++) {
            a[index].style.color = "white";
        }
        document.querySelector("header").style.background = "black";
        document.querySelector("nav").style.background = "black";
        document.querySelector("body").style.background = "black";
        document.querySelector(".sidebar").style.background = "black";
        document.querySelector("#footer").style.background = "black";
        document.querySelector(".copyright").style.background = "black";
        document.querySelector("header").style.boxShadow =" 0 1px 1px 0 grey";
        p.style.color = "white";
        for (let index = 0; index < small.length; index++) {
            small[index].style.color = "white";
        }
    }
    toggle.addEventListener("mouseover", colorate ,true);
    toggle.addEventListener("mouseleave", decolorate );
        