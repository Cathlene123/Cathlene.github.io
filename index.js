const btnLike1 = document.getElementById("btnLike1")
const countLikes1 = document.getElementById("countLikes1")
const btnLike2 = document.getElementById("btnLike1")
const countLikes2 = document.getElementById("countLikes1")
function clickLike1(){
  let countLikes1 = parsInt(countLikes1.value) + 1
  countLikes1.textContent = totalLikes1.toString()
  }
function clickLike2(){
  let countLikes2 = parsInt(countLikes2.value) + 1
  countLikes2.textContent = totalLikes2.toString()
}
btnLike1.AddEventListener("click",clickLike1)
btnLike2.AddEventListener("click",clickLike2)
