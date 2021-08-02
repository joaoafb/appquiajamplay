var divinput = document.getElementById("divinput")
var divbtn = document.getElementById("divbtn")
var msg = document.getElementById("msg")
var txt = document.getElementById("txt")
var box = document.getElementById("box")
var menu = document.getElementById("menu")
divinput.style.display = 'none'
msg.style.display = 'none'
menu.style.display = 'none'

if (localStorage.getItem("abrirbox") == "sim") {
    box.style.display = 'none'
    menu.style.display = 'block'
}

function mostrarinput() {
    divbtn.style.display = 'none'
    divinput.style.display = 'block'
    txt.innerText = "Qual o Seu Nome?"
    localStorage.setItem("abrirbox", "sim")
}

function final() {

    var input = document.getElementById("input")
    localStorage.setItem("usuario", input.value)
    localStorage.getItem("usuario")
    divinput.style.display = 'none'
    divbtn.style.display = 'none'
    msg.style.display = 'block'
    txt.style.display = 'none'

}

function jogo() {
    box.style.display = 'none'
    menu.style.display = 'block'

}

function fecha() {
    box.style.display = 'none'
    menu.style.display = 'block'



}