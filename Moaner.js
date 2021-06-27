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
    console.log("Acceleration along X-axis: " + Math.round(sensor.x * 100) / 100);
    console.log("Acceleration along Y-axis: " + Math.round(sensor.y * 100) / 100);
    console.log("Acceleration along Z-axis: " + Math.round(sensor.z * 100) / 100);
    document.getElementById("x").innerHTML = (Math.round(sensor.x * 100) / 100).toString();
    document.getElementById("y").innerHTML = (Math.round(sensor.y * 100) / 100).toString();
    document.getElementById("z").innerHTML = (Math.round(sensor.z * 100) / 100).toString();
}

sensor.onerror = event => console.log(event.error.name, event.error.message);