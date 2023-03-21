const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".navMenu")
const header = document.querySelector("header")

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active")
  navMenu.classList.toggle("active")
})

document.querySelectorAll(".navLink").forEach(n => n.
  addEventListener("click", () => {
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
  }))

// slider function//
let count = 1
document.getElementById("animal1").checked = true
document.getElementById("team1").checked = true

setInterval(function () {
  nextSlide()
}, 4000)

function nextSlide() {
  count++
  if (count > 3) {
    count = 1
  } else if (count > 4) {
    count = 1
  } {
    document.getElementById("team" + count).checked = true
  }
  document.getElementById("animal" + count).checked = true
}

// header scroll function//
window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 0)
  hamburger.classList.toggle("scrolled", window.scrollY > 0)
  navMenu.classList.toggle("scrolled", window.scrollY > 0)
})