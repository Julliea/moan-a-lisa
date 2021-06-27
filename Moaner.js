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
    document.getElementById("y").innerHTML = parseFloat(sensor.y).toFixed(2);
    document.getElementById("z").innerHTML = parseFloat(sensor.z).toFixed(2);
}

sensor.onerror = event => console.log(event.error.name, event.error.message);