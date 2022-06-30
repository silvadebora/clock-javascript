function showTime() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let sessions = 'AM';

    if(hours == 0){
        hours = 12;
    }
    
    if(hours > 12){
        hours = hours - 12;
        sessions = 'PM';
    }

    //se o tempo (h,s,m) for menor do que 10, coloca um 0 na frente
    hours = (hours < 10) ? '0' + hours : hours;
    minutes = (minutes < 10) ? '0' + minutes : minutes;
    seconds = (seconds < 10) ? '0' + seconds : seconds;

    let time = `${hours} : ${minutes} : ${seconds} ${sessions}`

    document.getElementById('displayclock').innerText = time;

}

showTime();
setInterval(showTime, 1000);
