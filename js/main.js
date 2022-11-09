
let button_submit = document.getElementById("button_submit")
let window_1 = document.getElementById("window-1")
let window_2 = document.getElementById("window-2")
let states = document.getElementsByClassName("states")
let answer = document.getElementById("answer")

const createText = (_text) => {
    let _p = document.createElement("p")
    let _textNode = document.createTextNode(_text)
    _p.appendChild(_textNode)
    return _p
}

let enter = false;
states[0].addEventListener("click", () => {
    if (!enter) {
        states[0].classList.add("gray")
        let check = states[0].innerHTML
        showAnswer(check)
        enter = true;
    } 
})

states[1].addEventListener("click", () => {
    if (!enter) {
        states[1].classList.add("gray")
        let check = states[1].innerHTML
        showAnswer(check)
        enter = true;
    }

})

states[2].addEventListener("click", () => {
    if (!enter) {
        states[2].classList.add("gray")
        let check = states[2].innerHTML
        showAnswer(check)
        enter = true;
    }

})

states[3].addEventListener("click", () => {
    if (!enter) {
        states[3].classList.add("gray")
        let check = states[3].innerHTML
        showAnswer(check)
        enter = true;
    }

})

states[4].addEventListener("click", () => {
    if (!enter) {
        states[4].classList.add("gray")
        let check = states[4].innerHTML
        showAnswer(check)
        enter = true;
    }
})

function showAnswer(check) {
    let text = createText("You selected " + check + " out of 5")
    answer.appendChild(text)
}

button_submit.onclick = () => {
    if (enter) {
        window_1.style.display = "none";
        window_2.classList.remove("hidden")
    } else {
        alert("Elija una opción")
    }
}