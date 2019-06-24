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
const equal = document.getElementById("equal")
const plus = document.getElementById("plus")
const minus = document.getElementById("minus")
const multiply = document.getElementById("multiply")
const podzielic = document.getElementById("podzielic")
const clear = document.getElementById("clear")
const p = document.querySelector("p")
let tablica = ""
let pamiec = undefined
let operacja = undefined

function buton(event) {
    let element = event.target
    let wynik = undefined

    if (element.value == "="){
        if (operacja == '-'){
            wynik = parseInt(pamiec) - parseInt(tablica)
            tablica = wynik
            p.innerHTML = wynik
            operacja = ""
            }
        else if (operacja == '+'){
            wynik = parseInt(pamiec) + parseInt(tablica)
            tablica = wynik
            p.innerHTML = wynik
            operacja = ""

        }
        else if (operacja == '*'){
            wynik = parseInt(pamiec) * parseInt(tablica)
            tablica = wynik
            p.innerHTML = wynik
            operacja = ""
        }

        else if (operacja == '/'){
            wynik = parseInt(pamiec) / parseInt(tablica)
            tablica = wynik
            p.innerHTML = wynik
            operacja = ""
        }
    }

    else if (element.value == "-"){
        operacja = '-'
        pamiec = tablica
        tablica = ""
        p.innerHTML = tablica
    }

    else if (element.value == "+"){
        operacja = "+"
        pamiec = tablica
        tablica = ""
        p.innerHTML = tablica
    }

    else if (element.value == "*"){
        operacja = "*"
        pamiec = tablica
        tablica = ""
        p.innerHTML = tablica
    }

    else if (element.value == "/"){
        operacja = "/"
        pamiec = tablica
        tablica = ""
        p.innerHTML = tablica
    }

    else if (element.value == "C"){
        tablica = ""
        pamiec = undefined
        p.innerHTML = tablica

    }

    else{
        {
            tablica = tablica + element.value
            p.innerHTML = tablica
        }
    }

}
