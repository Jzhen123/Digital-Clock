var currentDate = document.querySelector('.date')
var actualClock = document.querySelector('.clock');

setInterval(digitalClock, 100);

function digitalClock(){

    var fullDate = new Date();
    var year = fullDate.getFullYear();
    var month = fullDate.getMonth() + 1;
    var day = fullDate.getDate();
    var hours = fullDate.getHours();
    var minutes = fullDate.getMinutes();
    var seconds = fullDate.getSeconds();
    var dayOrNight;
        if (hours < 12){
        dayOrNight = 'AM';
         } else if (hours >= 12){
        dayOrNight = 'PM'
        }
    
    
    currentDate.innerHTML = month + '/' + day + '/' + year;
    actualClock.innerHTML = hours + ':' + minutes + ':' + seconds + dayOrNight; //Displays the time in a simple format 00:00:00
}

digitalClock();