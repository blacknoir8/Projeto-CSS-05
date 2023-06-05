let menu = document.querySelector(".menu-bar");
let navBar = document.querySelector("nav");

menu.onclick = () => {
    menu.classList.toggle("fa-times");
    navBar.classList.toggle("active");
}

window.onresize = () => {
    menu.classList.remove("fa-times");
    navBar.classList.remove("active");
}
window.onscroll = () => {
    menu.classList.remove("fa-times");
    navBar.classList.remove("active");
    if (window.scrollY > 60) {
        document.querySelector("#scroll-top").classList.add("active");
    } else {
        document.querySelector("#scroll-top").classList.remove("active");
    }
}


function fadeOut() {
    setInterval(loader, 3000);
}

window.onload = fadeOut;