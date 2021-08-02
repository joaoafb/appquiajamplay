var som = localStorage.getItem("som")
var audio = document.querySelector("audio")
var semaudio = document.getElementById("semaudio")
var comaudio = document.getElementById("comaudio")


if (som == '0') {
    audio.volume = '0'
    var semaudio = document.getElementById("semaudio")
    var comaudio = document.getElementById("comaudio")


}

if (som == '100') {
    audio.volume = '1000'
    var semaudio = document.getElementById("semaudio")
    var comaudio = document.getElementById("comaudio")


}

function mutar() {

    localStorage.setItem("som", '0')
    var som = localStorage.getItem("som")
    var audio = document.querySelector("audio")
    audio.volume = som
    location.reload();
}

function voltar() {

    localStorage.setItem("som", '1')
    var som = localStorage.getItem("som")
    var audio = document.querySelector("audio")
    audio.volume = som
    location.reload();
}




if (som == '0') {
    var semaudio = document.getElementById("semaudio")
    var comaudio = document.getElementById("comaudio")

    semaudio.style.display = 'none'
    comaudio.style.display = 'block'
}



if (som == '1') {
    var semaudio = document.getElementById("semaudio")
    var comaudio = document.getElementById("comaudio")

    semaudio.style.display = 'block'
    comaudio.style.display = 'none'
}