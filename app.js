const menuOneButton = document.getElementById("menu-button-1")

menuOneButton.addEventListener("click", function () {
  console.log("are you working?")
  document.getElementById("menu-1").classList.toggle("show")
})


const menuTwoButton = document.getElementById("menu-button-2")

menuTwoButton.addEventListener("click", function () {
  console.log("yes")
  document.getElementById("menu-2").classList.toggle("show")
})


const menuThreeButton = document.getElementById("menu-button-3")

menuThreeButton.addEventListener("click", function () {
  console.log("i do")
  document.getElementById("menu-3").classList.toggle("show")
})