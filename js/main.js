const controle = document.querySelectorAll("[data-controle")
 //Pegando toda a classe de controle-ajuste e depois a data-controle
const estatistica = document.querySelectorAll("[data-estatistica]")

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes": {
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach( (elemento) => {
    elemento.addEventListener('click', (evento) => {
        manipulaDados(evento.target.textContent, evento.target.parentNode);
        //Target (no console) mostra exatamente qual botão foi apertado. O data-set.controle busca o data-controle dentro do html. o evento seguinte, o parentNode, buscou o pai do elemento que foi clicado, o outro parâmetro da função, que criou o parâmetro 'controle'
        atualizaEstatistica(evento.target.dataset.controle)
    })
});

/**
 * Função que adiciona e subtrai
 * @param {*} operacao 
 * @param {*} controle 
 */
function manipulaDados(operacao, controle){
//  Vai buscar onde tem no html data-contador

const peca = controle.querySelector("[data-contador]");
console.log(peca);

    if (operacao === "-"){
        peca.value = parseInt(peca.value) - 1
    } else if (operacao === "+") {
        peca.value = parseInt(peca.value) + 1
    }
 }

 function atualizaEstatistica(peca, operacao) {
    console.log(pecas[peca])

    estatistica.forEach((elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + 1 ;
    })
}