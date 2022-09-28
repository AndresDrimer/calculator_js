//variables
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
let isNegative = false


// listeners
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
deleteOne.addEventListener('click', clearLastDigit)
deleteAll.addEventListener('click', clearAllDigits)
equal.addEventListener('click', calculus)

/*keyboard listener*/
document.onkeyup = e =>{
    if (e.key == "0" || e.key == "Num0"){
        agregarDigito(0);
    }else if (e.key == "1" || e.key == "Num1"){
        agregarDigito(1);
    }else if (e.key == "2" || e.key == "Num2"){
        agregarDigito(2);
    }else if (e.key == "3" || e.key == "Num3"){
        agregarDigito(3);
    }else if (e.key == "4" || e.key == "Num4"){
        agregarDigito(4);
    }else if (e.key == "5" || e.key == "Num5"){
        agregarDigito(5);
    }else if (e.key == "6" || e.key == "Num6"){
        agregarDigito(6);
    }else if (e.key == "7" || e.key == "Num7"){
        agregarDigito(7);
    }else if (e.key == "8" || e.key == "Num8"){
        agregarDigito(8);
    }else if (e.key == "9" || e.key == "Num9"){
        agregarDigito(9);
    }else if (e.key == "+" || e.key == "Num+"){
        agregarDigito("+");
    }else if (e.key == "-" || e.key == "Num-"){
        agregarDigito("-");
    }else if (e.key == "*" || e.key == "Num*"){
        agregarDigito("x");
    }else if (e.key == "/" || e.key == "Num/"){
        agregarDigito("/");
    }else if (e.key == "." || e.key == "Num."){
        agregarDigito(".");
    }else if (e.key == "Enter" || e.key == "Numenter"){
        calculus();
    }    
}

//funciones
function agregarDigito(digit){
    checkNumLenght()
    expression=expression+digit
    display.innerHTML= expression
} 

function checkNumLenght(){
    if (expression.length>7 && expression.length<=14 ) {
        display.style.fontSize = "0.5em"
        display.style.height = "110px"
    }
    else if (expression.length>14) {
         alert("CLC 001 calculator process operations up to 15 digits.")
        }
    else if (expression.length<7) {
        display.style.fontSize = "0.8em"
    }
}

function evalNegative(){
    if (expression[0] == "-"){
        expression = expression.slice(1)
        isNegative = true
        console.log(expression, isNegative)
    }
}

function clearLastDigit(){
    expression=expression.slice(0,-1)
    display.innerHTML= expression 
}

function clearAllDigits(){
    expression=[]
    display.innerHTML=expression
}

function calculus(){
    evalNegative();
    for (i in expression) {
        if (expression[i] == '+'){
            let nums=expression.split('+')
            num1=parseFloat(nums[0])
            if (isNegative == true){
                num1=-num1
            }
            num2=parseFloat(nums[1])
            result=num1+num2
            round3ClearZeros()  
            display.innerHTML= result
            expression = result

        } else if (expression[i] == '-'){
            let nums=expression.split('-')
            num1=parseFloat(nums[0])
            if (isNegative == true){
                num1=-num1
            }
            num2=parseFloat(nums[1])
            result=num1-num2
            round3ClearZeros()  
            display.innerHTML= result
            expression = result

        } else if (expression[i] == 'x'){
            let nums=expression.split('x')
            num1=parseFloat(nums[0])
            if (isNegative == true){
                num1=-num1
            }
            num2=parseFloat(nums[1])
            result=num1*num2
            round3ClearZeros()   
            display.innerHTML= result
            expression = result

        } else if (expression[i] == '/'){
            let nums=expression.split('/')
            num1=parseFloat(nums[0])
            if (isNegative == true){
                num1=-num1
            }
            num2=parseFloat(nums[1])
            
            if (num2=="0"){
                alert ("zero division is forbidden")
                expression=[]
                display.innerHTML= expression
                break
            }

            result=num1/num2
            round3ClearZeros()        
            display.innerHTML= result
            expression = result
        }          
    }
}


function round3ClearZeros(){
    result= parseFloat(result.toFixed(3))
            for (i in result){
                if (result[result.lenght]=='0'){
                    result.pop()
                }
            }
}

function agregarNuevoDigito(digit){
    checkNumLenght()
    expression=expression+digit
    display.innerHTML= expression
} 