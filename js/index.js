const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".navMenu")
const header = document.querySelector("header")

const leftArrow = document.querySelector(".arr.left")
const rightArrow = document.querySelector(".arr.right")

const animal1 = document.getElementById("animal1")
const team1 = document.getElementById("team1")

// activate hamburger menu //
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active")
  navMenu.classList.toggle("active")
})

// deactivates hamburger menu after clicking a link //
document.querySelectorAll(".navLink").forEach(n => n.
  addEventListener("click", () => {
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
  }))

// event listeners for arrow buttons on desktop //
leftArrow.addEventListener("click", () => {
  prevSlide()
})

rightArrow.addEventListener("click", () => {
  nextSlide()
})

// slider function//
let count = 1
animal1.checked = true
team1.checked = true

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

function prevSlide() {
  count--
  if (count < 1) {
    count = 3
  }
  document.getElementById("animal" + count).checked = true
}


// header scroll function//
window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 0)
})