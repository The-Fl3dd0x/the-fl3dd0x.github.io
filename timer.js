const second = 1000, minute = second * 60, hour = minute * 60;
var startTime;
var persecond;
var dbg;

function setIntervalFun() {
    let now = new Date().getTime(), distance = now - startTime;

    document.querySelector(".stunden").innerText = Math.floor(distance / hour);
    document.querySelector(".minuten").innerText = Math.floor((distance % hour) / minute);
    document.querySelector(".sekunden").innerText = Math.floor((distance % minute) / second);

    document.querySelector(".geldbetrag").innerText = ((distance / second) * persecond).toFixed(2);
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
    setInterval(setIntervalFun, 100);
    persecond = getUrlVar("persecond");
};