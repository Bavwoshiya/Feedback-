const firstButton = document.querySelector(".num1")
const secondButton = document.querySelector(".num2")
const thirdButton = document.querySelector(".num3")
const fourthButton = document.querySelector(".num4")
const fifthButton = document.querySelector(".num5")
const rating = document.querySelector(".rating")
const baby = document.querySelector(".baby")
const thankU = document.querySelector(".thankU")
const star = document.querySelector(".star")

firstButton.addEventListener("click", ()=> {
    firstButton.style.backgroundColor = "white";
    rating.textContent = " You selected 1 out of 5";
    
})
secondButton.addEventListener("click", ()=> {
    secondButton.style.backgroundColor = "white";
    rating.textContent = " You selected 2 out of 5";
    
})
thirdButton.addEventListener("click", ()=> {
    thirdButton.style.backgroundColor = "white";
    rating.textContent = " You selected 3 out of 5";
    
})
fourthButton.addEventListener("click", ()=> {
    fourthButton.style.backgroundColor = "white";
    rating.textContent = " You selected 4 out of 5";
})
fifthButton.addEventListener("click", ()=> {
    fifthButton.style.backgroundColor = "white";
    rating.textContent = " You selected 5 out of 5";
    
})


   rating.style.color = "rgb(249, 118, 25)";
    rating.style.backgroundColor = "hsl(229, 10%, 35%)";
    rating.style.borderRadius = "25px";
    rating.style.padding = "3px";
    rating.style.textAlign = "center";
    rating.style.width = "250px";
    rating.style.marginTop = "25px";

baby.addEventListener("click", () => {
    thankU.style.display = "flex";
    star.style.display = "none";
})