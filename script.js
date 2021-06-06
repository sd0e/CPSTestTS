var button = document.getElementById("click");
var clicks = [];
button.addEventListener('click', function () {
    var millis = new Date().getTime();
    clicks.push(millis);
});
var update = function () {
    var totalClicks = 0;
    var toRemove = [];
    var i;
    var millis = new Date().getTime();
    for (i = 0; i < clicks.length; i++) {
        if (millis - clicks[i] < 1000) {
            totalClicks++;
        }
        else {
            toRemove.push(i);
        }
    }
    var j;
    for (j = 0; j < toRemove.length; j++) {
        clicks.splice(toRemove[j], 1);
    }
    if (totalClicks == 0) {
        button.setAttribute('value', 'Click');
    }
    else {
        button.setAttribute('value', totalClicks.toString() + '');
    }
};
window.setInterval(update, 100);
