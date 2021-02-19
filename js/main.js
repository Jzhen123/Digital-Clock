var actualClock = document.querySelector('.clock')

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
    
    
    actualClock.innerHTML = hours + ':' + minutes + ':' + seconds + dayOrNight; //Displays the time in a simple format 00:00:00
}

digitalClock();