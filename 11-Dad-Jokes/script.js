const jokeEl = document.getElementById("joke")
const jokeBtn = document.getElementById("jokeBtn")

const generateJoke = async () => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  }

  //   MEthod 1
  fetch("https://icanhazdadjoke.com", config)
    .then((response) => response.json())
    .then((data) => {
      jokeEl.innerHTML = data.joke
    })

  //   method 2
  //   const response = await fetch("https://icanhazdadjoke.com", config)
  //   const data = await response.json()
  //   jokeEl.innerHTML = data.joke
}

generateJoke()

jokeBtn.addEventListener("click", () => {
  generateJoke()
})
