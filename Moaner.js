window.onload = function()
{
    document.addEventListener("deviceready", init, false);
    init();
}

//let sensor = new Accelerometer();
let sensor = new LinearAccelerationSensor({frequency: 60});

function init() {
    sensor.start();
}

let start = new Date().getTime();
let elapsed = new Date().getTime();

sensor.onreading = () => {
    upOrDown();
}
let started = false;

function upOrDown(){
    //let x = sensor.x - 9.82;
    let x = sensor.x
    let margin = 0.3;

    if (x < -margin){
        document.getElementById("x").innerHTML = "UP";
        bpm();
    }
    else if (x > margin) {
        document.getElementById("x").innerHTML = "DOWN";
    }
    else {
        document.getElementById("x").innerHTML = "STILL";
    }


}
function bpm(){
    if (started) {
        started = false;
        elapsed = (new Date().getTime() - start);

        document.getElementById("bpm").innerHTML = (60000 / (elapsed)).toFixed(0).toString();
    } else {
        start = new Date().getTime();
        started = true;
    }

}

sensor.onerror = event => console.log(event.error.name, event.error.message);