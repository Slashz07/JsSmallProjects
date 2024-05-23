const startBtn = document.getElementById("btn1")
const endBtn = document.getElementById("btn2")
let intervalID = 0


const changeColor = function () {
  const hexCodes = "0123456789ABCDEF"
  let i = 0
  let colorCode = "#"

  while (i < 6) {
    colorIndex = Math.floor(Math.random() * 16)
    colorCode += hexCodes[colorIndex]
    i++
  }

  document.body.style.backgroundColor = colorCode
}

startBtn.addEventListener("click", () => {
  if (!intervalID) {//using if block condition is very crucial otherwise setinterval would be implemented as many times as we click the button as a result the function associated with it woudld be called numerous no. of times to preform bg change  which would result in unexpected behaviour
    intervalID = setInterval(changeColor, 1000);
  }
})
endBtn.addEventListener("click", () => {
  clearInterval(intervalID)
  intervalID=null//making value null is important for the if block condition to work
})