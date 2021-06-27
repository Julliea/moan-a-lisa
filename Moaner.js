window.onload = function()
{
    document.addEventListener("deviceready", init, false);
    init();
}

let sensor = new Accelerometer();
function init() {
    sensor.start();
}


sensor.onreading = () => {
    document.getElementById("x").innerHTML = parseFloat(sensor.x).toFixed(2);
}

sensor.onerror = event => console.log(event.error.name, event.error.message);