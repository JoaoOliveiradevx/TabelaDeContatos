const form = document.getElementById('form-agenda')
const imgAprovado = '<img src="/images/aprovado.png" alt="Emoji celebrando" />'
const imgReprovado = '<img src="/images/reprovado.png" alt="Emoji decepcionado" />'
const nomes = []
const numeros = []



let linhas = ''

form.addEventListener('submit', function(e) {
    e.preventDefault();

    
    adicionaLinha()
    atualizaTabela()
    atualizaMediaFinal()
})

function adicionaLinha(){

    const inputNomeContato = document.getElementById('nome-contato')
    const inputNumeroContato = document.getElementById('numero-contato')
    
    if(nomes.includes(inputNomeContato.value)){
        alert(`O contato ${inputNumeroContato.value} já foi inserido!`)
    } else {

        let linha = '<tr>'
        linha += `<td> ${inputNomeContato.value}</td>`
        linha += `<td> ${inputNumeroContato.value}</td>`
    
        linhas += linha
    

    }

    nomes.push(inputNomeContato.value)
    numeros.push(parseFloat(inputNumeroContato.value ))
    
 

    inputNomeContato.value = ''
    inputNumeroContato.value = ''

}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}

