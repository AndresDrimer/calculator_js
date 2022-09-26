let one =document.getElementById("1")
let two =document.getElementById("2")
let three =document.getElementById("3")
let four =document.getElementById("4")
let five =document.getElementById("5")
let six =document.getElementById("6")
let seven =document.getElementById("7")
let eight =document.getElementById("8")
let nine =document.getElementById("9")
let zero =document.getElementById("0")
let addition =document.getElementById("plus")
let subtraction =document.getElementById("minus")
let multiplication =document.getElementById("multiplication")
let division =document.getElementById("division")
let equal =document.getElementById("equal")
let point =document.getElementById("point")
let deleteOne = document.getElementById("delete")
let deleteAll = document.getElementById("deleteAll")
let display = document.getElementById("display-int")

let expression =[]
let num1=[]
let num2 =[]
let result=parseFloat(0)

one.addEventListener('click', function() {agregarDigito(1)})
two.addEventListener('click', function() {agregarDigito(2)})
three.addEventListener('click', function() {agregarDigito(3)})
four.addEventListener('click', function() {agregarDigito(4)})
five.addEventListener('click', function() {agregarDigito(5)})
six.addEventListener('click', function() {agregarDigito(6)})
seven.addEventListener('click', function() {agregarDigito(7)})
eight.addEventListener('click', function() {agregarDigito(8)})
nine.addEventListener('click', function() {agregarDigito(9)})
zero.addEventListener('click', function() {agregarDigito(0)})
point.addEventListener('click', function() {agregarDigito(".")})
addition.addEventListener('click', function() {agregarDigito("+")})
subtraction.addEventListener('click', function() {agregarDigito("-")})
multiplication.addEventListener('click', function() {agregarDigito("x")})
division.addEventListener('click', function() {agregarDigito("/")})

function agregarDigito(digit){
    checkNumLenght()
    expression=expression+digit
    display.innerHTML= expression 
}

function checkNumLenght(){
    if (expression.length>7) {
        display.style.fontSize= "0.5em"
        }
    if (expression.length>15) {
         alert("la calculadora CLC 001 recibe sólo operaciones de hasta 15 dígitos")
        }
}

deleteOne.addEventListener('click', clearLastDigit)
deleteAll.addEventListener('click', clearAllDigits)

function clearLastDigit(){
    expression=expression.slice(0,-1)
    display.innerHTML= expression 
}

function clearAllDigits(){
    expression=[]
    display.innerHTML=expression
}

equal.addEventListener('click', calculus)

function calculus(){
    for (i in expression) {
        if (expression[i] == '+'){
            let nums=expression.split('+')
            num1=parseFloat(nums[0])
            num2=parseFloat(nums[1])
            result=num1+num2
            display.innerHTML= result
        } else if (expression[i] == '-'){
            let nums=expression.split('-')
            num1=parseFloat(nums[0])
            num2=parseFloat(nums[1])
            result=num1-num2
            display.innerHTML= result
        }
        else if (expression[i] == 'x'){
            let nums=expression.split('x')
            num1=parseFloat(nums[0])
            num2=parseFloat(nums[1])
            result=num1*num2
            display.innerHTML= result
        } else if (expression[i] == '/'){
            let nums=expression.split('/')
            num1=parseFloat(nums[0])
            num2=parseFloat(nums[1])
            result=num1/num2
            display.innerHTML= result
        }          
    }
}
