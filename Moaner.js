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
    upOrDown();
}

function upOrDown(){
    let x = sensor.x - 9.82;
    let margin = 0.2;

    if (x < -margin){
        document.getElementById("x").innerHTML = "UP";
    }
    else if (x > margin) {
        document.getElementById("x").innerHTML = "DOWN";
    }
    else {
        document.getElementById("x").innerHTML = "STILL";
    }

}

sensor.onerror = event => console.log(event.error.name, event.error.message);