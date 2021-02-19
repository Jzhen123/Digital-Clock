
setInterval(digitalClock, 100);

function digitalClock(){

    var fullDate = new Date();
    var hours = fullDate.getHours();
    var minutes = fullDate.getMinutes();
    var seconds = fullDate.getSeconds();

    var dayOrNight;
        if (hours < 12){
        dayOrNight = 'AM';
         } else if (hours >= 12){
        dayOrNight = 'PM'
        }
    
    
    clock.innerHTML = hours + ':' + minutes + ':' + seconds + dayOrNight;
}

digitalClock();