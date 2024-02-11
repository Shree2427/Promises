inputData = document.querySelector(".inputdata")
paragraph = document.querySelector(".para")

inputData.addEventListener("change", (e) => {
    paragraph.innerText = `Text entered is ${e.target.value}`

})