const timer = document.querySelector('#timer');
const iniciar = document.querySelector('#iniciar');
const pausar = document.querySelector('#pausar');
const zerar = document.querySelector('#zerar');

let segundos = 0;
let minutos = 0;
let horas = 0;

let cron;

function tempo() {
    segundos++;
    if (segundos == 60) {
        segundos = 0;
        minute++;
    }
    if (minutos == 60) {
        minutos = 0;
        horas++;
    }

    timer.innerHTML = `${formatarTempo(horas)}:${formatarTempo(minutos)}:${formatarTempo(segundos)}`;
}

function inicio() {
    pausa();
    if(timer.classList.contains('pausa')) timer.classList.remove('pausa');
    cron = setInterval(() => { tempo(); }, 1000);
}

function pausa() {
    clearInterval(cron);
    timer.classList.add('pausa');
}

function reset(){
    segundos = 0;
    minutos = 0;
    horas = 0;

    timer.innerHTML = `00:00:00`;
    if(timer.classList.contains('pausa')) timer.classList.remove('pausa');
}

function formatarTempo(tempo) {
    return tempo < 10 ? `0${tempo}` : tempo;
}

iniciar.addEventListener('click', inicio);
pausar.addEventListener('click', pausa);
zerar.addEventListener('click', reset);