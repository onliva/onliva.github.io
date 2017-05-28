// slide show

window.onload = function () {
    'use strict';
    var slide = document.getElementById("slide"),
        wallpaper,
        img;

    if (slide) {
        setInterval(next, 3000);
    }

    wallpaper = [
    "img/home-bg1.jpg",
    "img/home-bg2.jpg",
    "img/home-bg3.jpg",
    "img/home-bg4.jpg"
    ];

    img = 0;

    function next() {
        img++;
        if (img >= wallpaper.length) {
            img = 0;
        };
        slide.src = wallpaper[img];
    }

    function prev() {
        img--;
        if (img < 0) {
            img = wallpaper.length - 1;
        }
        slide.src = wallpaper[img];
    }
    // nav menu
    function w3_open() {
        document.getElementById("mySidebar").style.display = "block";
        document.getElementsByClassName("w3-overlay")[0].style.display = "block";
    }

    function w3_close() {
        document.getElementById("mySidebar").style.display = "none";
        document.getElementsByClassName("w3-overlay")[0].style.display = "none";
    }

};
