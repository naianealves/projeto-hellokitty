
function responder1(){
    var meu = window.document.getElementById('escrevi')
    var escrevi = String(meu.value)
var resposta = window.document.getElementById('saida1');

if (escrevi == 'natação'){
    
resposta.innerHTML += `<h2>Resposta certa!!</h2>`

}else{
    resposta.innerHTML += `Errou! resposta correta = natação`
} 
}
