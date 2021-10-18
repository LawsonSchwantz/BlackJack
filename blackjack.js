// getRandomCard()  to set values the first and second cards
//let firstcard = getRandomCard()
//let secondcard = getRandomCard()
//let kartu = [firstcard, secondcard]
//let hasil = firstcard + secondcard
//pindah ke bawah
let kartu = []
let hasil = 0
let hasBlackJack = false
let isAlive = false
let pesan = ""
let messageEl = document.getElementById("message-el")
// let sumEl = document.querySelector(".sum-el") tapi di htmlnya pake class bukan id atau
//let sumEl = document.querySelector("#body") nanti ini cuma muncul hasilnya aja yang laen ilang
//let sumEl = document.querySelector("#sum-el") pokoknya querySelector itu kuat sekali
 let sumEl = document.getElementById("sum-el")
 let cardsEl = document.getElementById("cards-el")

let player = {
   Name: "Bertrand",
   sayHello: function() {
     //console.log("Heisan")
   }
}
//player.sayHello() info: object with a method
 let playerEl = document.getElementById("player-el")
 playerEl.textContent = "Nama:" + player.Name 

 function getRandomCard() {
   let randomnumer = Math.floor(Math.random()*13) + 1
   if (randomnumer > 14){
     return 14
   }else if (randomnumer === 1){
     return 11
   }else {
     return randomnumer
   }
 }
function mulai() {
  isAlive = true
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  kartu = [firstCard]
  hasil = firstCard
  hasBlackJack = false
   renderGame()
}
function renderGame() {
  cardsEl.textContent = "Kartu: "
  for (let i = 0; i < kartu.length; i++){
    cardsEl.textContent += kartu[i] + " "
  }
  sumEl.textContent = "Hasil: " + hasil
  if (hasil < 21) {
    pesan = "Mau Kartu Baru?"
  } else if (hasil === 21){
      pesan = "Hore blackjack"
    hasBlackJack =  true
  } else {
       pesan = "Kamu Kalah :("
       isAlive = false
  }
   messageEl.textContent = pesan

}

function newcard() {
  let randomnumer = Math.floor(Math.random()*13) + 1
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard()
    hasil +=card
    kartu.push(card)
  }else if (randomnumer === 14){
    return 1
  }
    renderGame()  

}
