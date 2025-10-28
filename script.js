let [hours, minutes, seconds] = [0, 0, 0];
let display = document.getElementById("display");
let timer = null;
let isRunning = false;

function stopwatch() {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;
    if (minutes == 60) {
      minutes = 0;
      hours++;
    }
  }

  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;

  display.innerHTML = `${h}:${m}:${s}`;
}

document.getElementById("startStop").addEventListener("click", () => {
  if (!isRunning) {
    timer = setInterval(stopwatch, 1000);
    isRunning = true;
    document.getElementById("startStop").innerHTML = "Pause";
  } else {
    clearInterval(timer);
    isRunning = false;
    document.getElementById("startStop").innerHTML = "Start";
  }
});

document.getElementById("reset").addEventListener("click", () => {
  clearInterval(timer);
  [hours, minutes, seconds] = [0, 0, 0];
  display.innerHTML = "00:00:00";
  document.getElementById("startStop").innerHTML = "Start";
  isRunning = false;
  document.getElementById("laps").innerHTML = "";
});

document.getElementById("lap").addEventListener("click", () => {
  if (isRunning) {
    let lapTime = display.innerHTML;
    let lapItem = document.createElement("li");
    lapItem.textContent = `Lap: ${lapTime}`;
    document.getElementById("laps").appendChild(lapItem);
  }
});
