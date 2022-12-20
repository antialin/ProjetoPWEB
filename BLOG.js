var slideItem = 0;
window.onload = function () {
  setInterval(passarSlide, 4000);

  var slidewidth = document.getElementById("slideShow").offsetWidth;
  var objs = document.getElementsByClassName("slides");
  for (var i = 0; i < objs.length; i++) {
    objs[i].style.width = slidewidth + "px";
  }
};
function passarSlide() {
  var slidewidth = document.getElementById("slideShow").offsetWidth;

  if (slideItem >= 3) {
    slideItem = 0;
  } else {
    slideItem++;
  }

  document.getElementsByClassName("slideShow-area")[0].style.marginLeft =
    "-" + slidewidth * slideItem + "px";

  var botaoSlide = document.getElementsByClassName("toggleBtn");
  for (var i = 0; i < botaoSlide.length; i++) {
    botaoSlide[i].style.backgroundColor = "transparent";
  }
  botaoSlide[slideItem].style.backgroundColor = "rgb(255,255,255,.8)";
}
function mudarSlide(pos) {
  slideItem = pos;
  var slidewidth = document.getElementById("slideShow").offsetWidth;
  document.getElementsByClassName("slideShow-area")[0].style.marginLeft =
    "-" + slidewidth * slideItem + "px";
  var botaoSlide = document.getElementsByClassName("toggleBtn");
for (var i = 0; i < botaoSlide.length; i++) {
  botaoSlide[i].style.backgroundColor = "transparent";
}
botaoSlide[pos].style.backgroundColor = "rgb(255,255,255,.8)";
}



function toggleMenu() {
  var menu = document.getElementById("menu");

  if (menu.style.display == "none" || menu.style.display == "") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
}
