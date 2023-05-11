/* PSEUDOCODE 
HTML
Define h1 with the title of the game 
Memory card game
Make 16 div elements each of them contanis 
16 images , each image will match one.
CSS
I will use grid to layout the elemets properly 
similar way I've done the Wirewrame.
Javascript
Add a let counter variable
Store two variable for 2 similar pictures
that we will compare later on
Selects all the div from html
and for each of them create a click  addEventListener.
I will use the counter to check if any of the images has been selected yet
I use if condition to check if  two selected pictures match each other 
I will attach a classclicked to the element that has been clicked
and I will change the opacity to 1 to the class to make the picture visible.
I will add one button to start the game and 
another button to reset and play the game again.
*/
let counter = 0;
let firstSelection = "";
let secondSelection = "";
const btn = document.getElementById("btn1")
const conti= document.getElementById("container")

const cards = document.querySelectorAll(".cards .card");
cards.forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.add("clicked");
    
    if (counter === 0) {
        firstSelection = card.getAttribute("fruit");
        counter++;
      
      } else {
        secondSelection = card.getAttribute("fruit");
        counter = 0;
      
      if (firstSelection === secondSelection) {
        const correctCards = document.querySelectorAll(
          ".card[fruit='" + firstSelection + "']"
          
        );
        
        correctCards[0].classList.add("checked");
        correctCards[0].classList.remove("clicked");
        
        correctCards[1].classList.add("checked");
        correctCards[1].classList.remove("clicked");
      }
      else {
        const incorrectCards = document.querySelectorAll(".card.clicked");

        incorrectCards[0].classList.add("shake");
        incorrectCards[1].classList.add("shake");
        setTimeout(() => {
            incorrectCards[0].classList.remove("shake");
            incorrectCards[0].classList.remove("clicked");
            incorrectCards[1].classList.remove("shake");
            incorrectCards[1].classList.remove("clicked");
          }, 800);
        
      }
}
})
})
btn.addEventListener("click", () => {
    cards.forEach((card) =>{
        card.classList.remove("clicked", "checked")
        counter = 0;
    })
   
});

