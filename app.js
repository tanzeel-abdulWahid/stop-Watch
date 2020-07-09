// // //functions tht keeps running
// function time(){
//     console.log("running..")
// }
// setInterval(time,1000)

// //function tht runs one time after given time
// function timeOut(){
//     console.log("running...")
// }
// setTimeout(timeOut,3000)

// var count= 0;
// var interval; 
// interval = setInterval(function(){
//     count++
//     console.log(count)
// },1000)

// setTimeout(function(){
//     clearInterval(interval)
// },5000);

// // stop watch starts
var min = 0;
var sec = 0;
var msec = 0;
var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var msecHeading = document.getElementById("msec");
var interval;

function timer(){
    msec++
    msecHeading.innerHTML = msec;
    if (msec >= 100){
        sec++
        secHeading.innerHTML = sec
        msec = 0
    }
    if (sec >=60){
        min++
        minHeading.innerHTML = min
        sec = 0
    }
}
function start(){
    interval = setInterval(timer,10)
    var button = document.getElementById("btnstart")
    button.disabled = true
}

function stop(){
    clearInterval(interval)
    var button = document.getElementById("btnstart")
    button.disabled = false
}

function reset(){
    min=0
    sec=0
    msec=0
    minHeading.innerHTML=min
    secHeading.innerHTML=sec
    msecHeading.innerHTML=msec
    stop()
}
