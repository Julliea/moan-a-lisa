window.onload = function()
{
    document.addEventListener("deviceready", init, false);
}

let sensor = new Accelerometer();
function init() {
    sensor.start();
}


sensor.onreading = () => {
    console.log("Acceleration along X-axis: " + sensor.x);
    console.log("Acceleration along Y-axis: " + sensor.y);
    console.log("Acceleration along Z-axis: " + sensor.z);
}

sensor.onerror = event => console.log(event.error.name, event.error.message);