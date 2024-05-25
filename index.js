const btnLike1 = document.getElementById("btnLike")
const countLikes1 = document.getElementById("countLikes1")

function clickLike1(){
  let countLikes1 = parsInt(countLikes1.value) + 1
  countLikes1.textContent = totalLikes1.toString()
  }
btnLike1.AddEventListener("click",clickLike1)
