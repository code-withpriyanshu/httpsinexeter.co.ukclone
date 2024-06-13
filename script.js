let counter = 0;
function submenu(n) {
  counter++;
  let arr = document.getElementsByClassName("arrowbutton");
  // arr[n].style.backgroundColor = "red";
  let container = document.getElementById(`subcon${n}`);
  if (counter % 2 != 0) {
    container.style.display = "block";
  } else {
    container.style.display = "none";
  }
}
function intro() {
  let color = document.getElementById("nav0");
  let border = document.getElementById("li0");
  color.style.color = "black";
  border.style.borderBottom = " 2px solid #0e595a";
}

function introl() {
  let color = document.getElementById("nav0");
  let border = document.getElementById("li0");
  color.style.color = "grey";
  border.style.borderBottom = "2px solid #f5f4ee";
}
function bid() {
  let color = document.getElementById("nav1");
  let border = document.getElementById("li1");
  color.style.color = "black";
  border.style.borderBottom = " 2px solid #0e595a";
}
function bidl() {
  let color = document.getElementById("nav1");
  color.style.color = "grey";
  let border = document.getElementById("li1");
  border.style.borderBottom = "2px solid #f5f4ee";
}
function desc() {
  let color = document.getElementById("nav2");
  color.style.color = "black";
  let border = document.getElementById("li2");
  border.style.borderBottom = " 2px solid #0e595a";
}
function descl() {
  let color = document.getElementById("nav2");
  let border = document.getElementById("li2");
  color.style.color = "grey";
  border.style.borderBottom = "2px solid #f5f4ee";
}
let con2 = 0;
function rotate(n) {
  let button = document.getElementById(`rot${n}`);
  let hidded = document.getElementById(`hiddencontent${n}`);
  let img = document.getElementById(`img${n}`);
  con2++;
  if (con2 % 2 != 0) {
    button.style.transform = "rotate(45deg)";
    button.style.transition = "transform 0.5s ease";
    hidded.style.display = "block";
    img.style.opacity = 1;
  } else {
    button.style.transform = "rotate(0deg)";
    button.style.transition = "transform 0.5s ease";
    hidded.style.display = "none";
    img.style.opacity = 0.6;
  }
}

function movecircle() {
  let circle = document.getElementById("minicircle");
  window.addEventListener("mousemove", function (del) {
    let x = del.clientX - 45;
    let y = del.clientY - 45;
    circle.style.transform = `translate(${x}px , ${y}px)`;
  });
}
movecircle();

// gsap
let tl = gsap.timeline();
tl.from(".first-page-anm", {
  y: 100,
  opacity: 0,
  duration: 0.4,
  stagger: 0.3,
  ease: "power2.out",
});
tl.from("#navbar", {
  y: -100,
  opacity: 0,
  duration: 0.4,
  stagger: 0.3,
  ease: "power2.out",
});
tl.from("#project ,#animage", {
  opacity: 0,
  duration: 0.4,
  stagger: 0.3,
  ease: "power2.out",
});

document.addEventListener("DOMContentLoaded", function () {
  const scroll = new LocomotiveScroll({
    el: document.querySelector("#veryimp"),
    smooth: true,
  });

  // Handle scroll event
  scroll.on("scroll", (args) => {
    const navbar = document.querySelector("#navbar");
    if (args.scroll.y > 0) {
      navbar.classList.add("is-sticky");
    } else {
      navbar.classList.remove("is-sticky");
    }
  });
});
