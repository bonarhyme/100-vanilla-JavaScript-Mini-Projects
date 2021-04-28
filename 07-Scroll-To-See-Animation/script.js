const boxes = document.querySelectorAll(".box")

window.addEventListener("scroll", checkBoxes)

checkBoxes()

function checkBoxes() {
  const triggerButtom = (window.innerHeight / 5) * 3.5

  boxes.forEach((box, index) => {
    const boxTop = box.getBoundingClientRect().top
    box.textContent = `Content box ${index}`
    if (boxTop < triggerButtom) {
      box.classList.add("show")
    } else {
      box.classList.remove("show")
    }
  })
}
