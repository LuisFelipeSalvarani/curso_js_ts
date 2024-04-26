import geraSenha from "./geradores";

const senhaGerada = document.querySelector('.senha-gerada');
const caracteres = document.querySelector('.caracteres');
const maiuscula = document.querySelector('.maiuscula');
const minuscula = document.querySelector('.minuscula');
const numeros = document.querySelector('.numeros');
const simbolos = document.querySelector('.simbolos');
const gerarSenha = document.querySelector('.gerarSenha');

export default () => {
    gerarSenha.addEventListener('click', () => {
        senhaGerada.innerHTML = gera();
    });
};

function gera() {
    const senha = geraSenha(
        caracteres.value,
        maiuscula.checked,
        minuscula.checked,
        numeros.checked,
        simbolos.checked
    );
    return senha || 'nada selecionado';
}