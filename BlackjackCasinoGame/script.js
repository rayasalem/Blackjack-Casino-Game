let messageCard=document.querySelector(".notification-message");
let sumCards=document.getElementById("card-sum");
let cardsNumber=document.querySelector(".Cards-count");
let startAgain=document.getElementById("next-hand");
let start=document.getElementById("start-game");
let message="";
let playerIsOnline=false;
let playerHasBlackJack=false;
let cards=[];
let sum=0;

function startplaying(){
    playerIsOnline=true;
    let cardNumber1=GenerateRandomCard();
    let cardNumber2=GenerateRandomCard();
    let cards=[cardNumber1,cardNumber2];
    let sum=cards[0] + cards[1];
    sumCards.textContent=" sum:  " + sum;
    for (let i=0;i<cards.length;i++){
        cardsNumber.textContent+= cards[i] + "    ";
    }

    renderGame();
}

function renderGame(){


        if (sum <= 20) {
            message = "Do you want to draw a new card?"
        } else if (sum === 21) {
            message = "You've got Blackjack!"
            playerHasBlackJack = true
        } else {
            message = "You're out of the game!"
            playerIsOnline = false
        }
        messageCard.textContent = message
    }
    

function GenerateRandomCard() {
let randomNumber= (Math.floor(Math.random()*13)) +1;
if(randomNumber==1){
    return 11; 
} else if (randomNumber>10){
    return 10;
} else {
    return randomNumber;
}
}

function NewCard(){
    // let card= random number
    if(playerIsOnline ==true && playerHasBlackJack==false){

    let Randomcard=GenerateRandomCard();
    sum += Randomcard;
    cards.push(Randomcard)
    renderGame();
    }
}


function startagain(){
    window.location.reload();
}