
function responder(){
    var meu = document.getElementById("escrevi").value
    var escrevi = String(meu)
var resposta = document.getElementById("saida1");

if (escrevi == 'natação'){
    
resposta.innerHTML += `<h2>Resposta certa!!</h2>`

}else{
    resposta.innerHTML += `Errou! resposta correta = natação`
}
}