let diceroll = document.getElementById("dice")

diceImages = [
    "images/dice 1 .png",
      "images/dice 2 .png",
      "images/dice 3.png",
      "images/dice 4.png",
      "images/dice 5.png",
      "images/dice 6.png"


]

function play (){

    dice.classList.add("roll"); 

    setTimeout(() => {
        dice.classList.remove("roll")


          let randomNumber =  Math.floor(Math.random()*6);
         dice.src = diceImages[randomNumber];

    },500);
    

  

}


