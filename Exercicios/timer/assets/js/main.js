function relogio() {
    function criaHoraDosSegundos(segundos) {
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-br', {
            hour12: false,
            timeZone: 'UTC'
        });
    }
    
    const timer = document.querySelector('#timer');
    let segundos = 0;
    let relogio;
    
    function iniciaRelogio() {
        relogio = setInterval(function() {
            segundos++
            timer.innerHTML = criaHoraDosSegundos(segundos);
        }, 1000);
    }
    
    document.addEventListener('click', function(e) {
        const el = e.target;
    
        if(el.classList.contains('iniciar')) {
            clearInterval(relogio);
            if(timer.classList.contains('pausa')) timer.classList.remove('pausa');
            iniciaRelogio();
        }
    
        if(el.classList.contains('pausar')) {
            clearInterval(relogio);
            timer.classList.add('pausa');
        }
    
        if(el.classList.contains('zerar')) {
            clearInterval(relogio);
            timer.innerHTML = '00:00:00';
            segundos = 0;
            if(timer.classList.contains('pausa')) timer.classList.remove('pausa');
        }
    });
}
relogio();
