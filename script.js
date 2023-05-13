const cards = document.querySelectorAll(".memory-card");
let hasFlippedCard = false;
let freez = false;
let firstCard, secondCard;
let isMatch;

function disableCards(){
    freez = true;
    setTimeout(()=>{
        firstCard.removeEventListener("click",flip);
        secondCard.removeEventListener("click",flip);
        freez = false;
    },1000);
}
function removeClass(){
    freez = true;
    setTimeout(()=>{
        firstCard.classList.remove("active");
        secondCard.classList.remove("active");
        freez = false;
    },1000);
    
}
function flip(){
    if(freez){
        return true;
    }
        if(!hasFlippedCard){
            firstCard = this;
        firstCard.classList.add("active");
        hasFlippedCard = true;
        }else{
            if(this === firstCard){
                return true;
            }else{
            secondCard = this;
            secondCard.classList.add("active");
            hasFlippedCard = false;
            isMatch = firstCard.dataset.id === secondCard.dataset.id;
            isMatch?disableCards():removeClass();
            }
        }
}
(function restart(){
    cards.forEach((card)=>{
        let random = Math.floor(Math.random()*12);
        card.style.order=random;
    });
})();
    cards.forEach((card)=>{
    card.addEventListener("click",flip);  
    })
   
