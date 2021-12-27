const second = 1000, minute = second * 60, hour = minute * 60;
var startTime, persecond, timer, distance, prevDistance = 0, isPaused = false;

function setIntervalFun() {
    var now = new Date().getTime();
    distance = now - startTime + prevDistance;

    document.querySelector(".stunden").innerText = Math.floor(distance / hour);
    document.querySelector(".minuten").innerText = Math.floor((distance % hour) / minute);
    document.querySelector(".sekunden").innerText = Math.floor((distance % minute) / second);

    document.querySelector(".geldbetrag").innerText = ((distance / second) * persecond).toFixed(2);
}

function pause() {
    if (isPaused) {
        startTime = new Date().getTime();
        timer = setInterval(setIntervalFun, 100);
        isPaused = false;
        document.querySelector(".btnPause").value = "Pause";
    } else {
        clearInterval(timer);
        isPaused = true;
        prevDistance = distance;
        document.querySelector(".btnPause").value = "Weiter";
    }
}

function getUrlVar(parameter) {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars[parameter];
}


window.onload = function() {
    startTime = new Date().getTime();
    timer = setInterval(setIntervalFun, 100);
    persecond = getUrlVar("persecond");
};