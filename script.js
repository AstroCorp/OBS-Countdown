const startTimer = (duration, display) => {
    let timer = duration;
    let minutes = 0;
    let seconds = 0;

    setInterval(() => {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        display.textContent = minutes + ':' + seconds;

        if (!display.style.animation) {
            display.style.animation = 'fadeIn linear 300ms';
        }
        
        if (timer > 0) {
            --timer;
        }
    }, 1000);
}

window.onload = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString); 
    const seconds = urlParams.get('seconds') || 0;
    const display = document.querySelector('#time');

    startTimer(seconds, display);
}
