const inputAdicionar = document.querySelector('.input-adicionar');
const btnAdicionar = document.querySelector('.btn-adicionar');
const lista = document.querySelector('.lista');

function criaLi() {
    const li = document.createElement('li');
    return li;
}

inputAdicionar.addEventListener('keypress', function(e) {
    if (e.keyCode === 13) {
        if (!inputAdicionar.value) return;
        criaTerefa(inputAdicionar.value);
    }
});

function limpaInput() {
    inputAdicionar.value = '';
    inputAdicionar.focus();
}

function criaBotaoApagar(li) {
    li.innerHTML += ' ';
    const botapApagar = document.createElement('button');
    botapApagar.innerHTML = 'Excluir';
    botapApagar.setAttribute('class', 'excluir');
    botapApagar.setAttribute('title', 'Excluir tarefa');
    li.appendChild(botapApagar);
}

function criaTerefa(textoInput) {
    const li = criaLi();
    li.innerHTML = textoInput;
    lista.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefas();
}

document.addEventListener('click', function(e) {
    const el = e.target;

    if (el.classList.contains('excluir')) {
        el.parentElement.remove();
        salvarTarefas();
    }

    if (el.classList.contains('btn-adicionar')) {
        if (!inputAdicionar.value) return;
        criaTerefa(inputAdicionar.value);
    }
});

function salvarTarefas() {
    const liTarefas = lista.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Excluir', '').trim();
        listaDeTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
}

function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);

    for (let tarefa of listaDeTarefas) {
        criaTerefa(tarefa);
    }
}

adicionaTarefasSalvas();