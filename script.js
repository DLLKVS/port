
function hamburg(){
  const navbar = document.querySelector(".dropdown")
  navbar.style.transform = "translateY(0px)"
}

function cancel(){
  const navbar = document.querySelector(".dropdown")
  navbar.style.transform = "translateY(-500px)"
}

var typed = new Typed(".typewriter-text",
  {
      strings: ["DEVELOPER", "DESIGNER", "0"],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true
  }
)