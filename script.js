const reveals = document.querySelectorAll('.reveal');

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  reveals.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add('active');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);

// TYPEWRITER EFFECT
const text = "I create websites that feel alive.";
let i = 0;

function typeWriter() {
  if (i < text.length) {
    document.querySelector(".typing-text").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 50);
  }
}
typeWriter();


// CURSOR GLOW
const glow = document.createElement("div");
glow.classList.add("cursor-glow");
document.body.appendChild(glow);

document.addEventListener("mousemove", (e) => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});

function setCurrency(type){
  const prices = document.querySelectorAll('.price');

  prices.forEach(el=>{
    if(type === 'INR'){
      el.innerText = "₹" + el.dataset.inr;
    }else{
      el.innerText = "$" + el.dataset.usd;
    }
  });

  document.getElementById("currency-popup").style.display = "none";

  // save choice
  localStorage.setItem("currency", type);
}

// load saved choice
window.onload = function(){
  const saved = localStorage.getItem("currency");
  if(saved){
    setCurrency(saved);
  }
};