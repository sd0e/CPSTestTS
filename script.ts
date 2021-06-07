const button = document.getElementById("click")! as HTMLButtonElement;
var clicks = [];

button.addEventListener('click', () => {
    const millis = new Date().getTime();
    clicks.push(millis);
});

let update = () => {
    var totalClicks: number = 0;
    var toRemove = [];
    let i: number;
    const millis = new Date().getTime();
    for (i = 0; i < clicks.length; i++) {
        if (millis - clicks[i] < 1000) {
            totalClicks++;
        } else {
            toRemove.push(i);
        }
    }
    let j: number;
    for (j = 0; j < toRemove.length; j++) {
        clicks.splice(toRemove[j], 1);
    }
    if (Number(document.getElementById('highscore').innerText) < totalClicks) {
        document.getElementById('highscore').innerText = totalClicks.toString();
    }
    if (totalClicks == 0) {
        button.setAttribute('value', 'Click');
    } else {
        button.setAttribute('value', totalClicks.toString() + '');
    }
}

window.setInterval(update, 100);