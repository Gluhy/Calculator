const one = document.getElementById("one")
const two = document.getElementById("two")
const three = document.getElementById("three")
const four = document.getElementById("four")
const five = document.getElementById("five")
const six = document.getElementById("six")
const seven = document.getElementById("seven")
const eight = document.getElementById("eight")
const nine = document.getElementById("nine")
const dot = document.getElementById("dot")
const zero = document.getElementById("zero")
const rownaSie = document.getElementById("rownaSie")
const plus = document.getElementById("plus")
const minus = document.getElementById("minus")
const multiply = document.getElementById("multiply")
const podzielic = document.getElementById("podzielic")
const clear = document.getElementById("clear")
const p = document.getElementById("p")
let tablica = ""
let pamiec = undefined


function buton(event) {
    let element = event.target

    if (element.value == "="){
        
    }

    else if (element.value == "-"){
    }

    else if (element.value == "+"){
    }

    else if (element.value == "*"){
    }

    else if (element.value == "/"){
    }

    else if (element.value == "."){
    }

    else if (element.value == "C"){
    }

    else{
        {
            tablica = tablica + element.value
            console.log(tablica)
            p.innerHTML = tablica
        }
    }

}