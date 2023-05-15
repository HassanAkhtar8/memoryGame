const cards = document.querySelectorAll(".memory-card");
let hasFlippedCard = false;
let freez = false;
let firstCard, secondCard;
let isMatch;
let turn = 0;
let score = 1;

const createModal = ()=>{
    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.innerHTML = `
    <div class="modal-content">
    <h1>Game Over</h1>
    <p>Score: ${score}</p>
    <p>Turns: ${turn}</p>
    <button class="btn">Restart</button>
    </div>
    `;

    document.body.appendChild(modal);
    const btn = document.querySelector(".btn");
    btn.addEventListener("click",()=>{
        location.reload();
    }
    )
}
function check(){
    if(score === 6){
        createModal();
    }
    
}


function disableCards(){
    freez = true;
    setTimeout(()=>{
        firstCard.removeEventListener("click",flip);
        secondCard.removeEventListener("click",flip);
        freez = false;
        score++;
    },1000);
    check();
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
            turn++;
            isMatch = firstCard.dataset.id === secondCard.dataset.id;
            isMatch?disableCards():removeClass();
            
            }
        }
        //check score
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
   
    