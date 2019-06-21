document.querySelector("#activate-flight").addEventListener("click" , () => {
    flightHandlerFunction();
})

document.querySelector("#activate-mindreading").addEventListener("click" , () => {
    mindReadingFunction ();
})

document.querySelector("#activate-xray").addEventListener("click" , () => {
    xrayFunction ();
})


document.getElementById("deactivate-all").addEventListener("click", () => {
    for (let i = 0; i <deactivateAll.length; i++) {
        deactivateAll[i].classList.remove("enabled")
       addAll (); 
    }
})


document.getElementById("activate-all").addEventListener("click", () => {
    for (let i = 0; i <activateALl.length; i++) {
        activateALl[i].classList.remove("disabled")
        activateALl[i].classList.add("enabled")
    }
})

function addAll () {
    for (let i = 0; i < findAll.length; i++) {
        findAll[i].classList.add("disabled")
    }
}



let queryAll = document.querySelectorAll("section")
let deactivateAll = document.getElementsByClassName("enabled");
let activateALl = document.querySelectorAll(".disabled");
let findAll = document.querySelectorAll(".power")


let flightSection = document.getElementById("flight")
let mindReadingSection = document.getElementById("mindreading")
let xraySection = document.getElementById("xray")

function flightHandlerFunction () {
    flightSection.classList.remove("disabled");
    flightSection.classList.add("enabled");
}

function mindReadingFunction () {
    mindReadingSection.classList.remove("disabled");
    mindReadingSection.classList.add("enabled");
}

function xrayFunction () {
   xraySection.classList.remove("disabled");
    xraySection.classList.add("enabled");
}

