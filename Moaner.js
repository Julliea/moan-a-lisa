window.onload = function()
{
    document.addEventListener("deviceready", init, false);
    init();
}

//let sensor = new Accelerometer();
let sensor = new LinearAccelerationSensor({frequency: 60});
let start = new Date().getTime();
let elapsed = new Date().getTime();
let slider;
let started = false;

function init() {
    sensor.start();
    slider = document.getElementById("myRange");
}
sensor.onreading = () => {
    upOrDown();
}
slider.oninput = () => {
    document.getElementById("rrate").innerHTML = slider.value;
}


function upOrDown(){
    //let x = sensor.x - 9.82;
    let x = sensor.x
    let margin = 2;

    document.getElementById("rrate").innerHTML = slider.value;
    //document.getElementById("x").innerHTML = x.toString();
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