let btn = document.querySelector("button");

let startBtn = document.querySelector(".start");
let stopBtn = document.querySelector(".stop");
let resetBtn = document.querySelector(".reset");

let hour = document.querySelector(".hour");
let minutes = document.querySelector(".minute");
let seconds = document.querySelector(".seconds");
let milliseconds = document.querySelector(".milliseconds");


hour.innerHTML = "10";
minutes.innerHTML = "58";
seconds.innerHTML = "27";
milliseconds.innerHTML = "35";



let h = 10;
let m = 58;
let s = 27;
let mil = 35;

let interval;
startBtn.addEventListener("click", function () {
  interval = setInterval(function () {
    mil--;
    milliseconds.innerHTML = mil;

    if (mil <= 0) {
      mil = 350;
      s--;
      seconds.innerHTML = s;
      if (s <= 0) {
        s = 60 ;
        m--;
        minutes.innerHTML = m;
        if (m <= 60) {
          m = 60;
          h--;
          hour.innerHTML = h;
        }
      }
    }
  }, 60);
});

stopBtn.addEventListener("click", function () {
  clearInterval(interval);
});

resetBtn.addEventListener("click", function () {
  h = 0;
  m = 0;
  s = 0;
  mil = 0;

  hour.innerHTML = h + "0";
  minutes.innerHTML = m + "0";
  seconds.innerHTML = s + "0";
  milliseconds.innerHTML = mil + "0";
});
