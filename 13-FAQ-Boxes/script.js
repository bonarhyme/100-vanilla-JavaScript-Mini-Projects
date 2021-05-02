const toggles = document.querySelectorAll(".faq-toggle")

toggles.forEach((toggle) => {
  console.log(toggle)
  toggle.addEventListener("click", () => {
    toggle.parentNode.classList.toggle("active")
  })
})
