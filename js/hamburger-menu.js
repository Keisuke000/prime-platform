let nav = document.querySelector("nav");
let main = document.querySelector("main");
let btn = document.querySelector(".toggle-btn");
let mask = document.querySelector("#mask");

btn.onclick = () => {
  nav.classList.toggle("open");
  main.classList.toggle("open");
};

mask.onclick = () => {
  nav.classList.toggle("open");
  main.classList.toggle("open");
};




