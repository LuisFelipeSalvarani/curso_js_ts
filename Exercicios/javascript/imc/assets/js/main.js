const form = document.querySelector('.form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso && !altura) {
        setResultado('Campos inválidos', false);
        return;
    }

    if (!peso) {
        setResultado('Peso inválido', false);
        return;
    }

    if (!altura) {
        setResultado('Altura inválido', false);
        return;
    }

    const imc = getImc(peso, altura);
    const indiceImc = getIndiceImc(imc);

    const msg = `Seu IMC é ${imc} (${indiceImc}).`;

    setResultado(msg);
});

function getIndiceImc (imc) {
    const indice = [
        'Abaixo do peso',
        'Peso normal',
        'Sobrepeso',
        'Obesidade grau 1',
        'Obesidade grau 2',
        'Obesidade grau 3'
    ];

    if (imc >= 39.9) return indice[5];
    
    if (imc >= 34.9) return indice[4];
    
    if (imc >= 29.9) return indice[3];
    
    if (imc >= 24.9) return indice[2];
    
    if (imc >= 18.5) return indice[1];
    
    if (imc < 18.5) return indice[0];
}

function getImc (peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function criaP () {
    const p = document.createElement('p');
    return p;
}

function setResultado (msg, isValid = true) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criaP();
    p.innerHTML = msg;
    resultado.appendChild(p);

    if (resultado.classList.contains('erro') && isValid) resultado.classList.remove('erro');

    if (!isValid) resultado.classList.add('erro');

    resultado.classList.add('resultado');
}