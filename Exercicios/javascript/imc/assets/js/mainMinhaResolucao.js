function meuEscopo() {
    const form = document.querySelector(".form");
    const resultado = document.querySelector("#resultado");

    function calcularIMC(evento) {
        evento.preventDefault();

        let peso = Number(document.querySelector("#peso").value);
        let altura = Number(document.querySelector("#altura").value);

        let imc = peso / (altura ** 2);

        resultado.innerHTML = '';
        
        if(resultado.classList.contains('erro')) {
            resultado.classList.remove('erro');
        }

        if (Number.isNaN(peso)){
            resultado.innerHTML = `<p>Peso inválido</p>`;
            resultado.classList.add('erro');
        } else if (Number.isNaN(altura)){
            resultado.innerHTML = `<p>Altura inválido</p>`;
            resultado.classList.add('erro');
        } else if (imc < 18.5) {
            resultado.innerHTML = `<p>Seu IMC é ${imc.toFixed(2)} (Abaixo do peso)</p>`;
        } else if (imc >= 18.5 && imc < 25) {
            resultado.innerHTML = `<p>Seu IMC é ${imc.toFixed(2)} (Peso normal)</p>`;
        } else if (imc >= 25 && imc < 30) {
            resultado.innerHTML = `<p>Seu IMC é ${imc.toFixed(2)} (Sobrepeso)</p>`;
        } else if (imc >= 30 && imc < 35) {
            resultado.innerHTML = `<p>Seu IMC é ${imc.toFixed(2)} (Obesidade grau 1)</p>`;
        } else if (imc >= 35 && imc < 40) {
            resultado.innerHTML = `<p>Seu IMC é ${imc.toFixed(2)} (Obesidade grau 2)</p>`;
        } else if (imc >= 40) {
            resultado.innerHTML = `<p>Seu IMC é ${peso.toFixed(2)} (Obesidade grau 3)</p>`;
        } else {
            resultado.innerHTML = `<p>Campos inválidos</p>`;
            resultado.classList.add('erro');
        }

        resultado.classList.add('resultado');

    }

    form.addEventListener('submit', calcularIMC);
}

meuEscopo();
