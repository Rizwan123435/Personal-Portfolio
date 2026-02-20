/* MOBILE MENU */

const toggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

toggle.onclick = () => {
navLinks.classList.toggle("active");
};


/* TYPING EFFECT */

const text = "Java Developer | Python Programmer | Fast Learner";
let i = 0;

function typing(){
if(i < text.length){
document.querySelector(".typing").innerHTML += text.charAt(i);
i++;
setTimeout(typing,60);
}
}

typing();


/* SCROLL ANIMATION */

const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {

cards.forEach(card => {

let windowHeight = window.innerHeight;
let revealTop = card.getBoundingClientRect().top;

if(revealTop < windowHeight - 50){
card.classList.add("show");
}

});


/* TOP BUTTON */

const topBtn = document.getElementById("topBtn");

if(document.documentElement.scrollTop > 200){
topBtn.style.display="block";
}else{
topBtn.style.display="none";
}

});


document.getElementById("topBtn").onclick = () => {
window.scrollTo({top:0,behavior:"smooth"});
};
