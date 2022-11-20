const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./imagens/aprovado.png" alt="emoji alegre" />';
const imgReprovado = '<img src="./imagens/reprovado.png" alt="emoji triste" />';
const atividades = [];
const notas = [];
const spanAprovado = '<span class = "resultado aprovado">aprovado</span>';
const spanReprovado = '<span class = "resultado reprovado">reprovado</span>';
const notaminima = parseFloat(prompt("digite a nota minima:"));

let linhas ='';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionarlinha();
    atualizatabela();
    atualizamediafinal();
});

function adicionarlinha() {
    const inputnomeatividade = document.getElementById('nome-atividade');
    const inputnotaatividade = document.getElementById('nota-atividade');

    if (atividades.includes(inputnomeatividade.value)){
        alert (`A atividade: ${inputnomeatividade.value} ja foi Inserido`);
    }else{
    atividades.push(inputnomeatividade.value);
    notas.push(parseFloat(inputnotaatividade.value));

    let linha = '<tr>';
    linha += `<td>${inputnomeatividade.value}</td>`
    linha += `<td>${inputnotaatividade.value}</td>`
    linha += `<td>${inputnotaatividade.value >= notaminima ? imgAprovado : imgReprovado}</td>`;
    linha += '</tr>';

    linhas += linha;
}
    inputnomeatividade.value = '';
    inputnotaatividade.value = '';
}

function atualizatabela() {
    const corpotabela = document.querySelector('tbody');
    corpotabela.innerHTML = linhas;
}

function atualizamediafinal() {
    const mediafinal = calculamediafinal();

    document.getElementById('media-final-valor').innerHTML = mediafinal.toFixed(1);
    document.getElementById('media-final-resultado').innerHTML = mediafinal >= notaminima ? spanAprovado : spanReprovado;
}

function calculamediafinal(){
    let soma =0;

    for(let i =0; i < notas.length; i++){
        soma += notas[i];
    }

    return soma / notas.length;
}