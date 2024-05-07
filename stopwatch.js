var min = document.getElementById('min');
var sec = document.getElementById('sec');
var milli = document.getElementById('ms');
var start_btn = document.getElementById('start_btn')

var minutes = 0;        // variabl to count minnute
var seconds = 0;         // variabl to count second
var milliseconds = 0;   // variabl to count milisecond


var interval;// variable for time dealay

function start(){
    interval = setInterval(function(){
        
        milliseconds++


        if(milliseconds >= 9) // when milisecond = 100 =>1 second
            {
            seconds++
            milliseconds = 0 //empty milisecond to count again
        }

        if(seconds >= 59) // when second = 60 =>1 minute
            {
            minutes++
            seconds = 0
        }
        milli.innerText = milliseconds 
        sec.innerText = seconds < 10 ? '0' + seconds : seconds
        min.innerText = minutes < 10 ? '0' + minutes : minutes
         start_btn.disabled = true
    }, 100)
}
function paus(){
    clearInterval(interval)
    start_btn.disabled = false
}

function reset() {
    clearInterval(interval)
    milliseconds = 0
    seconds = 0
    minutes = 0
    min.innerText = 0
    sec.innerText = 0
    milli.innerText = 0
    start_btn.disabled = false
}

