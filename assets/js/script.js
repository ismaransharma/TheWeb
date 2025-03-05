let hamburger = document.querySelector(".hamburger");
let right = document.querySelector(".right");
let close = document.getElementById("close");
let nav = document.getElementById("navbar");

hamburger.addEventListener("click", function () {
  right.style.display = "block";
  nav.style.height = "auto";
  ul.style.gap = "16px";
  close.style.display = "block";
  hamburger.style.display = "none";
});

close.addEventListener("click", function () {
  right.style.display = "none";
  nav.style.height = "5em";
  close.style.display = "none";
  hamburger.style.display = "block";
});
