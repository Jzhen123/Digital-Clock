//const twelveBtn = document.querySelector('.twelveBtn');
//const twentyfourBtn = document.querySelector('.twentyfourBtn');


var currentDate = document.querySelector('.date');
var actualClock = document.querySelector('.clock');

setInterval(digitalClock, 100); //Refreshes the clock every .1 seconds

function digitalClock(){

    var fullDate = new Date();
    var year = fullDate.getFullYear(); //Stores the year in a variable
    var month = fullDate.getMonth() + 1; //Stores the month in a variable 
    var day = fullDate.getDate(); //Stores the day in a variable
    var hours = fullDate.getHours(); //Stores current hour in a variable
    var minutes = fullDate.getMinutes(); //Store Current minute in a variable
    var seconds = fullDate.getSeconds(); //Stores Current second in a variable
    
    var dayOrNight; //If/Else statement to determine if AM or PM
        if (hours < 12){
        dayOrNight = 'AM';
         } else if (hours >= 12){
        dayOrNight = 'PM'
        }

        
    
 currentDate.innerHTML = month + '/' + day + '/' + year; //Displays the Date
 actualClock.innerHTML = hours + ':' + minutes + ':' + seconds + dayOrNight; //Displays the time in a simple format 00:00:00
}

digitalClock();