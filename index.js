
var SetaDireita = window.document.getElementById("seta-direita")
var Leonardo = window.document.getElementById("Leonardo");
var samantha = window.document.getElementById("samantha");
var bruna = window.document.getElementById("bruna");
var SetaEsquerda = window.document.getElementById("seta-esquerda")

function RolarparaDireita() {
    Leonardo.style = "display:none"
    bruna.style = "display:flex"
    SetaDireita.style = "display:none"
    SetaEsquerda.style = "display:flex; margin-top:55px"

} 

function RolarparaEsquerda(){

    Leonardo.style ="display:flex"
    bruna.style ="display:none"
    SetaDireita.style ="display:flex;margin-top:55px"
    SetaEsquerda.style = "display:none"
}