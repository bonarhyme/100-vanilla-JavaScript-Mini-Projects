const close = document.querySelector("#close")
const open = document.querySelector("#open")
const container = document.querySelector(".full-container")

open.addEventListener("click", () => {
  container.classList.add("rotate")
})

close.addEventListener("click", () => {
  container.classList.remove("rotate")
})
