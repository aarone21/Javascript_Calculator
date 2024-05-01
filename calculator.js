

const display = document.getElementById("display");


let num1 = []
let num2 = []
var checker = []
let history =[]

function displayValue(input){
    if(checker.length !== 0){
        var displayInput = document.getElementById("display");
        displayInput.value = ""
        displayInput.value += input;
        var storedInput = parseFloat(displayInput.value)
        num1.push(storedInput)
        checker = []
        return storedInput
    }
    else{
        var displayInput = document.getElementById("display");
        displayInput.value += input;
        var storedInput = parseFloat(displayInput.value)
        num1.push(storedInput)
        return storedInput
    }
    
}
function negative(){
    var displayInput = document.getElementById("display");
    var storedInput = displayValue()
    storedInput = storedInput * -1
    displayInput.value = storedInput
    num1.push(storedInput)
    return storedInput

}
let execution = false
let storage = ''
function calculation(input){

    var displayInput = document.getElementById("display");
    if (!execution && storage !==''){
        input = storage
    }
    else if (execution){
        execution = false
    }
    switch (input){
        case '+':
            console.log(storage)
            if (num2.length === 0){
                var number = num1[num1.length -1]
                num2.push(number)
                displayInput.value = ""
            }
            else{
                var number = num1[num1.length -1] + num2[num2.length - 1]
                displayInput.value = number
                checker.push(number)
                num2.push(number)
                execution = true
            }
            break;
        case '-':
            console.log(storage)
            if (num2.length === 0){
                var number = num1[num1.length - 1]
                num2.push(number)
                
            }
            else{
                var number = num2[num2.length - 1] - num1[num1.length -1]
                displayInput.value = number
                checker.push(number)
                num2.push(number)
                execution = true
            }
            storage = input
            break;
        case '/':
            console.log(storage)
            storage = input
            if (num2.length === 0){
                var number = num1[num1.length - 1]
                num2.push(number)
                displayInput.value = ""
            }
            else{
                var number = num2[num2.length - 1]/ num1[num1.length -1]
                displayInput.value = number
                checker.push(number)
                num2.push(number)
                execution = true
            }
            break;
        case '*':
            console.log(storage)
            storage = input
            if (num2.length === 0){
                var number = num1[num1.length - 1]
                num2.push(number)
                displayInput.value = ""
            }
            else{
                var number = num1[num1.length -1] * num2[num2.length - 1]
                displayInput.value = number
                checker.push(number)
                num2.push(number)
                execution = true
            }
            break;
        default:
            displayInput.value = number  
            break;

    }
    }
