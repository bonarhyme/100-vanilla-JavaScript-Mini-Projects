const btn = document.querySelector(".btn")
const container = document.querySelector(".search")
const input = document.querySelector(".input")

btn.addEventListener("click", () => {
  container.classList.toggle("active")
  input.focus()
})
