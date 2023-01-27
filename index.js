const mainContainer = document.querySelector(".main-container")
const secondContainer = document.querySelector(".second-container")
const submitBtn = document.getElementById("submit")
const rateAgain = document.getElementById("rate-again")
const rating = document.getElementById("ratingno")
const rates = document.querySelectorAll(".btn")

submitBtn.addEventListener("click", () => {
    secondContainer.classList.remove("hidden")
    mainContainer.style.display = "none"
})

rateAgain.addEventListener("click", () => {
    secondContainer.classList.add("hidden")
    mainContainer.style.display = "block"
})

rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML
    })
})