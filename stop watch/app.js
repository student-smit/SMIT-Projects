// setInterval ==========================



let inter = setInterval(function () {
    document.write('hello interval ' + '<br>' )
}, 500) 


clearInterval(inter)



// setTimeout ============================

setTimeout(function () {
    
    document.write('hello timeout')
},500)



// ====================== create stop watch ===========================

let mili = 0;
let second = 0;
let minute = 0;
let hour = 0;




let hours = document.getElementById("hours")
let minutes = document.getElementById("minutes")
let seconds = document.getElementById("seconds")
let milisecond = document.getElementById("miliseconds")

// let  inter = 0;

function start(){

    inter = setInterval(function () {
        mili++ ;
        milisecond.innerHTML = mili
        if(mili >= 100){
        second++;
        seconds.innerHTML = second
        mili = 0
        }
         if (second >= 60 ){
            minute++ ;
            minutes.innerHTML = minute
            second = 0 ;

        }
         if (minute >= 60){
         hour++;
         hours.innerHTML = hour;
         minute = 0
        }
    } ,10)
}



function stop() {
    clearInterval(inter)
}

function reset() {
 
    milisecond.innerHTML = 0
    seconds.innerHTML = 0
    minutes.innerHTML =0
    hours.innerHTML = 0



   mili = 0;
   second = 0;
   minute = 0;
   hour = 0;
}



