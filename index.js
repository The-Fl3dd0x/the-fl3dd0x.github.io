function start() {
    const anzahlElements = document.querySelectorAll(".anzahl");
    const lohnElements = document.querySelectorAll(".lohn");
    var persecond = 0;
    for (var i = 0; i < anzahlElements.length; i++) {
        persecond = persecond + (anzahlElements[i].value * lohnElements[i].value / 3600);
    }
    window.location.href = window.location.origin + "/timer.html?persecond=" + persecond;
}