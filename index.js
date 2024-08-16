// document.querySelector("Button").addEventListener("click",handleClick);  /* we are using handleClick insted of handleClick()  */

// there is a diffrence between handleClick and handleClick(), 
// handleClick will wait until the button is clicked and then only it will run the "function handleClick()", 
// but handleClick() will run the function and again on clicking it will run the "function handleClick()". 

// function handleClick() {
//     alert("I got clicked");
// }

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i= 0 ; i<numberOfDrumButtons ; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click",function () {  /* here i start from 0 the first drum to the last 7th drum to get all the class of drum */

// detecting button press (using mouse) and send it to makeSound to play sound

        var buttonInnerHTML = this.innerHTML; /* Holds the which was clicked */

        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML)

    });
}

// this code below adds a keypress event to entire webpage for Detecting keybord press
document.addEventListener("keypress",function(event) { /* word event is used to get information for what button was pressed */
    makeSound(event.key);

    buttonAnimation(event.key)
})

function makeSound(Key){ /* word key is used to get the key which is getting clicked on keybord */
    switch (Key) {
        case "w":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;
    
        case "l":
                var kick = new Audio("./sounds/kick-bass.mp3");
                kick.play();
                break;

        default:console.log(buttonInnerHTML);
    }
}

function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("."+currentKey); /* this will find .w or .a or .s and so on */

    activeButton.classList.add("pressed");  /* classList is used to go into that .w or .a and add amination pressed from css */

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100); /* remove that class in 100 milisecond or 0.1 second */

}