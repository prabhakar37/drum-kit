var noOfDrums = document.querySelectorAll(".drum").length;
// alert(noOfDrums);


// cursor press detecting
for(var i=0 ; i< noOfDrums; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        this.style.color = "pink";

        var buttonInnerHTML = this.innerHTML;
        console.log(buttonInnerHTML);

        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);
        
    });
}

// detecting keyword
document.addEventListener("keydown", function(event){
    var pressKey = event.key;

    makeSound(pressKey);
    buttonAnimation(pressKey);
})

// sound triggering function

function makeSound(pressKey){
    switch (pressKey) {
        case "w":
            new Audio("./sounds/tom-1.mp3").play();
            break;
        case "a":
            new Audio("./sounds/tom-2.mp3").play();
            break;

        case "s":
            new Audio("./sounds/tom-3.mp3").play();
            break;

        case "d":
            new Audio("./sounds/tom-4.mp3").play();
            break;

        case "j":
            new Audio("./sounds/snare.mp3").play();
            break;
        case "k":
            new Audio("./sounds/crash.mp3").play();
            break;

        case "l":
            new Audio("./sounds/kick-bass.mp3").play();
            break;
        default:
            console.log(pressKey);
    }
}



function buttonAnimation(alphabet){
    console.log(alphabet);
    var activeButton = document.querySelector("." + alphabet);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100)
}













// calculator
// function add(a,b){
//     return a+b;
// };
// function sub(a,b){
//     return a-b;
// };
// function multiply(a,b){
//     return a*b;
// };
// function divide(a,b){
//     return a/b;
// }
// function calculator(a,b, operator){
//     if(operator == "+"){
//         return add(a,b);
//     }
//     else if(operator == "-"){
//         return sub(a,b);
//     }
//     else if(operator == "*"){
//         return multiply(a,b);
//     }
//     else if(operator == "/"){
//         return divide(a,b);
//     }
// }

// function calculator(a, b, operator){
//     return operator(a,b);
// }
// calculator(2,5, "+");




// constructor function

// function Bellboy(name, age, address, language){
//     this.name = name;
//     this.age = age;
//     this.address = address;
//     this.language = language;
//     this.greet = function (){
//         alert("welcome to Nuts");
//         // openDoor();
        
//         // closeDoor();
//     }
// }

// object creation

// var obj1 = {
//     name: "John",
//     age: 30,
//     address: "New York",
//     language: ["hindi", "english", "russian"],
// }


// var obj2 = new Bellboy("ram", 20, "panvel", ["french", "chinise"], );
// console.log(obj2.greet);