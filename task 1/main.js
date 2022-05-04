//---------------------------------------------------------------------------------------------this function alerts 1 word-------------------------------------------------------------------------------------------


function randomWord() {
    alert("random word")
}
randomWord()




//---------------------------------------------------------------------------------------------this function sums 2 numbers------------------------------------------------------------------------------------------


let number1 = parseFloat(prompt("enter a number to sum"))
let number2 = parseFloat(prompt("enter a number to sum"))
function sum ( num1 , num2) {
    let value = num1 + num2
    alert(num1 +  " + " + num2 + " = " + value )
}
sum(number1 , number2)




//--------------------------------------------------------------------------------------this function returns the square of a number---------------------------------------------------------------------------------


function square() {
    let number = prompt("enter a number to raise to the square")
    let sqNum = number * number
    alert(number + "² = " + sqNum)
}
square()
