let munContainer = 0;
let friv = document.querySelector(".munContainer");
let decreaceBtn = document.querySelector(".decreaceBtn");
let resetBtn = document.querySelector(".resetBtn");
let icreaceBtn = document.querySelector(".icreaceBtn");


icreaceBtn.addEventListener("click" , () =>{
    if(munContainer < 10 && munContainer >= 0){
        munContainer ++;
        friv.innerHTML = munContainer;
    }
})

decreaceBtn.addEventListener("click" , () => {
    if(munContainer > 0 && munContainer <= 10){
        munContainer --;
        friv.innerHTML = munContainer;
    }
})

resetBtn.addEventListener("click" , () => {
    munContainer = 0;
    friv.innerHTML = munContainer;
})