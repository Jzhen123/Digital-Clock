
setInterval(digitalClock, 500);

function digitalClock(){

    var fullDate = new Date();
    var hours = fullDate.getHours();
    var minutes = fullDate.getMinutes();
    var seconds = fullDate.getSeconds();
    
    clock.innerHTML = hours + ':' + minutes + ':' + seconds;
}

digitalClock();