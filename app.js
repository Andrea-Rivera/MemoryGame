const cardArray = [
    {
        name: "fries",
        img: "images/fries.png",
    },
    {
        name: "cheeseburger",
        img: "images/cheeseburger.png",
    },
    {
        name: "hotdog",
        img: "images/hotdog.png",
    },
    {
        name: "ice-cream",
        img: "images/ice-cream.png",
    },
    {
        name: "milkshake",
        img: "images/milkshake.png",
    },
    {
        name: "pizza",
        img: "images/pizza.png",
    },
    {
        name: "fries",
        img: "images/fries.png",
    },
    {
        name: "cheeseburger",
        img: "images/cheeseburger.png",
    },
    {
        name: "hotdog",
        img: "images/hotdog.png",
    },
    {
        name: "ice-cream",
        img: "images/ice-cream.png",
    },
    {
        name: "milkshake",
        img: "images/milkshake.png",
    },
    {
        name: "pizza",
        img: "images/pizza.png",
    },
]

cardArray.sort(()=> 0.5 - Math.random());

console.log (cardArray);

const gridDisplay = document.querySelector("#grid");
const resultDisplay= document.querySelector("#result")
let cardsChosen = [];
let cardChosenIds = [];
const cardsWon = [];

console.log(gridDisplay);

function createBoard(){
    for(let i=0; i< cardArray.length; i++ ){
       const card= document.createElement("img")
       card.setAttribute("src","images/blank.png")
       card.setAttribute("data-id",i)
       console.log(card, i)
       card.addEventListener("click", flipcard)
       gridDisplay.appendChild(card)
    }
}

createBoard();

function checkMatch(){
const cards= document.querySelectorAll("img")
const optionOneId = cardChosenIds[0]
const optionTwoId = cardChosenIds[1]
    console.log(cards)
    console.log("check for a Match!")

    if(optionOneId == optionTwoId){
        cards[optionOneId].setAttribute("src", "images/blank.png")
        cards[optionTwoId].setAttribute("src", "images/blank.png")
        alert("You have clicked the same image!")
    }
    if (cardsChosen[0] == cardsChosen[1])
    {
        alert("You found a Match!")
        cards[optionOneId].setAttribute("src", "images/white.png")
        cards[optionTwoId].setAttribute("src", "images/white.png")
        cards[optionOneId].removeEventListener("click", flipcard)
        cards[optionTwoId].removeEventListener("click", flipcard)
        cardsWon.push(cardsChosen)
    } 
    
    else{
        cards[optionOneId].setAttribute("src", "images/blank.png")
        cards[optionTwoId].setAttribute("src", "images/blank.png")
        alert("Sorry try again")
        }
        resultDisplay.textContent = cardsWon.length

    
    cardsChosen = [];
    cardChosenIds = [];

    if(cardsWon.length == cardArray.length/2){
        resultDisplay.textContent = "Congratulations you found them all!"
    }
}

function flipcard(){
 
 const cardId= this.getAttribute("data-id")
 cardsChosen.push(cardArray[cardId].name)
 cardChosenIds.push(cardId)
 console.log(cardsChosen)
 console.log(cardChosenIds)
this.setAttribute("src", cardArray[cardId].img)
if (cardsChosen.length === 2){
    setTimeout (checkMatch, 500)
}
}