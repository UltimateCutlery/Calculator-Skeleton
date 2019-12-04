var formula = "";   //empty string variable
var answer = null;


let buttons = document.getElementsByTagName("button"); //call buttons class

for ( let i = 0; i < buttons.length; i++){
    let button=buttons[i];
    let buttonvalue=button.innerHTML;

    if (buttonvalue === "="){ //checks for equals
        button.addEventListener("click", function(){//waits for button press
        let answer = Calculator.calculate(formula); //calcs answer
        Calculator.setDisplayValue(answer); //displays answer
        });
    }
    else if(buttonvalue === "DEL"){ //checks for delete
        button.addEventListener("click", function(){
        formula= formula.substring(0,formula.length-1); //deletes 1 buttonpress
         });
    }
    else if (buttonvalue ==="AC"){//checks for clear
        button.addEventListener("click", function(){
            formula ="";
        Calculator.clearDisplay(); //clears calc
        });
    }

    else if (buttonvalue == "×"){//checks for multiply
        button.addEventListener("click",function(){
            formula += "*";
            Calculator.setDisplayValue(formula);//displays formula
        });
    }
    else if (buttonvalue == "÷"){//checks for divide
        button.addEventListener("click",function(){
        formula += "/";
        Calculator.setDisplayValue(formula);//displays formula
        });
    }
    else {
        button.addEventListener("click", function(){
        formula += buttonvalue;//adds to formula;
        Calculator.setDisplayValue(formula);//displays formula
        });
    }

}


