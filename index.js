document.getElementById('stopButton').onclick = illuminateRed;
document.getElementById('slowButton').onclick = illuminateYellow;
document.getElementById('goButton').onclick = illuminateGreen;

let goLight = document.getElementById('goLight')
let slowLight = document.getElementById('slowLight')
let stopLight = document.getElementById('stopLight')

function illuminateRed() {
  clearLights();
  stopLight.style.backgroundColor = "red";
}

function illuminateYellow() {
  clearLights();
  slowLight.style.backgroundColor = "yellow";
}

function illuminateGreen() {
  clearLights();
  goLight.style.backgroundColor = "green";
  }

function clearLights() {
  document.getElementById('stopLight').style.backgroundColor = "black";
  document.getElementById('slowLight').style.backgroundColor = "black";
  document.getElementById('goLight').style.backgroundColor = "black";
}