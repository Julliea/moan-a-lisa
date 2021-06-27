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
    console.log("Acceleration along X-axis: " + sensor.x);
    console.log("Acceleration along Y-axis: " + sensor.y);
    console.log("Acceleration along Z-axis: " + sensor.z);
    document.getElementById("x").innerHTML = sensor.x;
    document.getElementById("y").innerHTML = sensor.y;
    document.getElementById("z").innerHTML = sensor.z;
}

sensor.onerror = event => console.log(event.error.name, event.error.message);